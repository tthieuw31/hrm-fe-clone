import {
  Card,
  Carousel,
  Col,
  Divider,
  List,
  Row,
  Spin,
  Typography,
} from 'antd';
import HomeAPI, {
  Article,
  ArticleDetail,
  ArticleListReq,
  GetListRequest,
  Recruitment,
} from 'apis/home/HomeAPI';
import { MainLayout } from 'components';
import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'utils/constants';
import BreadCrumb from 'components/modules/BreadCrumbs';
import CardJob from 'components/modules/layout/CardJob';
import { formatDateToString } from 'utils/formatDate';
import SearchBlock from 'pages/home/components/SearchBlock';
import { openNotificationWithIcon } from 'utils/notification';
import ContentBlock from './components/ContentBlock';
import { NewCalendarOutline } from 'assets/svg';
import {
  tuyenContentSEO,
  tuyenDVKH,
  tuyenSocialContent,
  tuyentdv,
  tuyenTongDai,
} from 'assets/jpg';
import JobAdsPoster from 'components/JobAdsPoster';
import ShareComponent from 'components/ShareComponent';

const BlogDetailPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const { url } = useParams();
  const shareUrl = window.location.href;
  const [jobList, setJobList] = useState<Recruitment[]>([]);
  const [articleData, setArticleData] = useState<ArticleDetail>();
  const [articleListData, setArticleListData] = useState<Article[]>([]);
  const [articleListReq, setArticleListReq] = useState<ArticleListReq>({
    page: DEFAULT_PAGE,
    size: 20,
  });

  useEffect(() => {
    const jobRecruit: GetListRequest = {
      experienceCode: '',
      recruitmentName: '',
      workingPlace: '',
      workTypeCode: '',
      titleCode: '',
      jobTitlesCode: '',
      salaryFrom: 0,
      salaryTo: 0,
      page: DEFAULT_PAGE,
      size: DEFAULT_PAGE_SIZE,
    };

    if (url) {
      fetchArticleDetail(url);
      getJobList(jobRecruit);
      getNews();
    }
  }, [url]);

  const getNews = () => {
    getArticleList({
      ...articleListReq,
      page: 0,
      size: 10,
    });
  };

  const { mutate: getJobList } = useMutation(HomeAPI.getList, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setJobList(data.data.content);
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });
  const { mutate: fetchArticleDetail } = useMutation(
    (url: any) => HomeAPI.getArticleDetail(url),
    {
      onSuccess: (response) => {
        setArticleData(response.data);
      },
      onError: (error) => {
        console.error('Error fetching job details:', error);
      },
    }
  );
  const { mutate: getArticleList } = useMutation(HomeAPI.getNews, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setArticleListData(data.data.content);
      } else {
        openNotificationWithIcon(
          'error',
          data.status.message!,
          JSON.stringify(data.status.code)
        );
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Lọc danh sách bài viết để loại bỏ những bài viết đã render
  const remainingArticles = shuffleArray(
    articleListData.filter((article) => article.url !== url)
  );

  const listItems = remainingArticles.slice(1, 4);

  const handleSearch = (values: any) => {
    const searchParams = new URLSearchParams();

    if (values.recruitmentName) {
      searchParams.append('recruitmentName', values.recruitmentName);
    }

    if (values.jobTitlesCode) {
      searchParams.append('jobTitlesCode', values.jobTitlesCode);
    }

    if (values.workingPlace) {
      searchParams.append('workingPlace', values.workingPlace);
    }

    navigate(`/jobs?${searchParams.toString()}`);
  };

  const posterData = [
    {
      id: 1,
      thumbnail: tuyenContentSEO,
      keyname: 'content',
    },
    {
      id: 2,
      thumbnail: tuyenDVKH,
      keyname: 'dich vu khach hang',
    },
    {
      id: 3,
      thumbnail: tuyenSocialContent,
      keyname: 'social content',
    },
    {
      id: 4,
      thumbnail: tuyentdv,
      keyname: 'trinh duoc vien',
    },
    {
      id: 5,
      thumbnail: tuyenTongDai,
      keyname: 'tong dai',
    },
  ];

  if (!articleData) return <Spin size="small" fullscreen />;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{articleData.titleName}</title>
          <meta name="description" content={articleData.summary} />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="article" />
          <meta
            property="og:site_name"
            content="Công ty cổ phần Eplus Research"
          />
          <meta property="og:title" content={articleData.titleName} />
          <meta property="og:description" content={articleData.summary} />
          <meta property="og:image" content={articleData.thumbnail} />
          <meta property="og:url" content={shareUrl} />
          <meta property="og:type" content="article" />
          <meta property="article:section" content="Tin tức" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="419" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={articleData.titleName} />
          <meta name="twitter:description" content={articleData.summary} />
          <meta name="twitter:image" content={articleData.thumbnail} />
        </Helmet>

        <MainLayout>
          <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-screen-xl">
              <div className="2xl:px-9 md:px-16">
                <BreadCrumb />

                {articleData ? (
                  <div className="px-5 sm:px-0 w-full md:pb-20">
                    <div className="">
                      <Row gutter={[24, 8]}>
                        <Col xs={24} lg={17} xl={17}>
                          <div className="w-full flex flex-col justify-center items-center">
                            <div className="text-center">
                              <Typography.Title level={2}>
                                {articleData?.titleName}
                              </Typography.Title>
                            </div>
                          </div>

                          <div className="flex w-full justify-end items-center">
                            <p className="mr-2">Chia sẻ</p>
                            <ShareComponent
                              title={articleData.titleName}
                              description={articleData.summary}
                            />
                          </div>

                          <Divider />

                          <ContentBlock
                            list={listItems}
                            mainData={articleData}
                          />
                        </Col>
                        <Col xs={24} lg={7} xl={7}>
                          <div className="search_box pb-10">
                            <Card
                              title={
                                <Typography.Text className="md:text-base font-bold text-white">
                                  TÌM VIỆC LÀM
                                </Typography.Text>
                              }
                              style={{ backgroundColor: '#072996' }}
                            >
                              <div>
                                <SearchBlock
                                  type="blog"
                                  onSubmit={handleSearch}
                                />
                              </div>
                            </Card>
                          </div>
                          <div className="pb-10">
                            {jobList ? (
                              <>
                                <Card
                                  title={
                                    <Typography.Text className="md:text-base font-bold">
                                      VIỆC LÀM GỢI Ý
                                    </Typography.Text>
                                  }
                                >
                                  <List
                                    pagination={false}
                                    dataSource={jobList}
                                    renderItem={(item) => (
                                      <CardJob
                                        key={item.id}
                                        type="mini"
                                        data={item}
                                        size="sm"
                                        style={{ marginBottom: '10px' }}
                                      />
                                    )}
                                  />
                                </Card>
                              </>
                            ) : null}
                          </div>
                          {/* <div className="hidden lg:flex items-center justify-center">
                          <Image
                            src={vnvcAds}
                            preview={false}
                            className="object-contain"
                          />
                        </div> */}
                          <div className="hidden sm:block">
                            <JobAdsPoster />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                ) : (
                  <Spin fullscreen />
                )}
              </div>
            </div>
          </div>
        </MainLayout>
      </HelmetProvider>
    </>
  );
};

export default BlogDetailPage;
