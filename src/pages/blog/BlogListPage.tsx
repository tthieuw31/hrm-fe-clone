import {
  Card,
  Carousel,
  Col,
  Divider,
  Image,
  List,
  Row,
  Spin,
  Typography,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useCategories } from 'apis/categories/CategoriesContext';
import HomeAPI, { Article, ArticleListReq } from 'apis/home/HomeAPI';
import { MainLayout } from 'components';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_PAGE } from 'utils/constants';
import { openNotificationWithIcon } from 'utils/notification';
import BreadCrumb from 'components/modules/BreadCrumbs';
import { CalendarOutlined } from '@ant-design/icons';
import { formatDateToString } from 'utils/formatDate';
import LeftSideList from './components/LeftSideList';
import BottomList from './components/BottomList';
import { NewCalendarGrayIcon, NewRightOutlined } from 'assets/svg';
import {
  tuyenContentSEO,
  tuyenDVKH,
  tuyenSocialContent,
  tuyentdv,
  tuyenTongDai,
} from 'assets/jpg';
import JobAdsPoster from 'components/JobAdsPoster';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

const { Title } = Typography;

const BlogListPage = (): React.ReactElement => {
  const { data: categoriesData, isLoading } = useCategories();
  const navigate = useNavigate();
  const [articleListData, setArticleListData] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const pageSize = 10;

  const [articleListReq, setArticleListReq] = useState<ArticleListReq>({
    page: DEFAULT_PAGE,
    size: 20,
  });

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

  const getNews = () => {
    getArticleList({
      ...articleListReq,
      page: Math.max(0, currentPage - 1),
      size: 20,
    });
  };

  useEffect(() => {
    getNews();
  }, [currentPage]);

  if (!articleListData || articleListData.length === 0) {
    return <Spin fullscreen />;
  }

  const firstItem = articleListData[0];
  const listItems = articleListData.slice(1, 6);

  const renderedIds = [firstItem.id, ...listItems.map((item) => item.id)];

  const remainingArticles = articleListData.filter(
    (article) => !renderedIds.includes(article.id)
  );

  const stripHtml = (html: any) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // const handleBeforeChange = (oldIndex: number, newIndex: number) => {
  //   setActiveSlide?.(newIndex);
  // };

  const handleItemClick = (url: string) => {
    navigate(`/blogs-news/${url}`);
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

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {articleListData ? (
        <MainLayout>
          <Content className="bg-white">
            <div className="mx-auto max-w-screen-xl">
              <div className="2xl:px-9 md:px-16">
                <BreadCrumb />
                <Title
                  level={2}
                  className="flex justify-center pb-2"
                  style={{
                    color: '#46494F',
                  }}
                >
                  NHỊP SỐNG
                </Title>
                <Divider className="mt-0" />

                <div className="px-5 sm:px-0 w-full lg:pb-20">
                  <Row gutter={16}>
                    <Col xs={6} lg={6} xl={6} className="hidden lg:block">
                      <LeftSideList data={listItems} />
                    </Col>
                    <Col xs={24} lg={12} xl={12}>
                      <div className="w-full h-full flex justify-center items-center pt-1 pb-4">
                        <Card
                          className="mt-1 drop-shadow-sm min-h-full"
                          hoverable
                          size="small"
                          // bordered={true}
                          onClick={() => handleItemClick(firstItem.url)}
                          cover={
                            <Image
                              preview={false}
                              src={firstItem.thumbnail}
                              className="blog-block-card-img"
                            />
                          }
                        >
                          <Typography.Text className="font-semibold my-1 text-justify">
                            {firstItem.titleName}
                          </Typography.Text>
                          <Typography.Paragraph
                            ellipsis={{ rows: 4 }}
                            className="font-thin my-1"
                          >
                            {stripHtml(firstItem.summary)}
                          </Typography.Paragraph>
                          <div className="flex font-thin mt-1 mb-2">
                            <NewCalendarGrayIcon
                              style={{
                                height: '17px',
                                width: '18px',
                                marginRight: '5px',
                              }}
                            />
                            <p
                              style={{
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                color: 'rgba(151, 151, 151, 1)',
                              }}
                            >
                              {formatDateToString(firstItem.datePublish)}
                            </p>
                          </div>
                          <a
                            href=""
                            className="flex underline font-light"
                            style={{
                              fontSize: '15px',
                              fontWeight: 400,
                              lineHeight: '22px',
                              color: '#28388D',
                            }}
                            onClick={() => handleItemClick(firstItem.url)}
                          >
                            Xem thêm
                            <NewRightOutlined className="ml-1 self-center" />
                          </a>
                        </Card>
                      </div>
                    </Col>

                    <Col xs={24} lg={24} xl={12} className="lg:hidden block">
                      <List
                        split={false}
                        itemLayout="horizontal"
                        size="default"
                        dataSource={listItems}
                        renderItem={(item: Article) => (
                          <List.Item
                            key={item.id}
                            // onClick={handleClick}
                            style={{ cursor: 'pointer' }}
                          >
                            <Card
                              onClick={() =>
                                navigate(`/blogs-news/${item.url}`)
                              }
                              hoverable
                              size="small"
                              className="w-full"
                            >
                              <Row
                                gutter={4}
                                align="middle"
                                style={{ height: '100%' }}
                              >
                                <Col
                                  xs={8}
                                  lg={8}
                                  xl={8}
                                  className="flex justify-center items-center"
                                >
                                  <img
                                    className="object-cover"
                                    alt="Pic"
                                    src={item.thumbnail}
                                  />
                                </Col>
                                <Col
                                  xs={16}
                                  lg={16}
                                  xl={16}
                                  style={{
                                    paddingLeft: '10px',
                                    paddingRight: 0,
                                  }}
                                >
                                  <List.Item.Meta
                                    title={
                                      <Typography.Text
                                        ellipsis
                                        className="font-semibold text-justify"
                                      >
                                        {item.titleName}
                                      </Typography.Text>
                                    }
                                    description={
                                      <>
                                        <Typography.Paragraph
                                          ellipsis={{ rows: 2 }}
                                          className="font-thin"
                                        >
                                          {stripHtml(item.summary)}
                                        </Typography.Paragraph>
                                        <p className="font-thin my-1">
                                          {<CalendarOutlined />}{' '}
                                          {formatDateToString(item.datePublish)}
                                        </p>
                                      </>
                                    }
                                  />
                                </Col>
                              </Row>
                            </Card>
                          </List.Item>
                        )}
                      />
                    </Col>
                    <Col xs={6} lg={6} xl={6} className="block mt-1">
                      <div
                        style={{
                          height: '540px',
                          objectFit: 'contain',
                        }}
                        className="hidden sm:block"
                      >
                        <JobAdsPoster
                          imageStyle={{
                            width: '100%',
                            height: '540px',
                            // marginBottom: '8px',
                            objectFit: 'contain',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} lg={24} xl={24}>
                      <BottomList data={remainingArticles} />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Content>
        </MainLayout>
      ) : (
        <Spin fullscreen />
      )}
    </>
  );
};

export default BlogListPage;
