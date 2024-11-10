import { Button, Carousel, Col, Image, Row, Spin, Typography } from 'antd';
import HomeAPI, {
  GetListRequest,
  JobDetail,
  Recruitment,
} from 'apis/home/HomeAPI';
import { MainLayout } from 'components';
import BlockJobDetail from './components/BlockJobDetail';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'utils/constants';
import BreadCrumb from 'components/modules/BreadCrumbs';
import { RightOutlined } from '@ant-design/icons';
import CardJob from 'components/modules/layout/CardJob';
import {
  jobListBotAd,
  tuyenContentSEO,
  tuyenDVKH,
  tuyenSocialContent,
  tuyentdv,
  tuyenTongDai,
} from 'assets/jpg';
import JobAdsPoster from 'components/JobAdsPoster';

const { Title } = Typography;

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

const JobDetailPage = (): React.ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobTitle, setJobTitle] = useState('');
  // const [jobId, setJobId] = useState<number>(0);

  const [jobData, setJobData] = useState<JobDetail>(null!);
  const [jobList, setJobList] = useState<any[]>(null!);

  useEffect(() => {
    if (id) {
      // const parts = id.split('-');
      // const jobId = parts[0];
      // const name = decodeURIComponent(parts.slice(1).join('-'));
      // setJobTitle(name);
      fetchJobDetail(id);
    }
  }, [id]);

  const { mutate: getJobList } = useMutation(HomeAPI.getList, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        const filteredJobs = data?.data?.content.filter(
          (job: Recruitment) => job.url !== id
        );
        setJobList(filteredJobs);
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });
  const { mutate: fetchJobDetail } = useMutation(
    (jobId: any) => HomeAPI.getDetail(jobId),
    {
      onSuccess: (response) => {
        setJobData(response.data);
      },
      onError: (error) => {
        console.error('Error fetching job details:', error);
      },
    }
  );

  useEffect(() => {
    let isMounted = true;
    const jobRecruit: GetListRequest = {
      // blockDepartmentCode: jobData?.blockDepartmentCode,
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
    if (id !== null) {
      getJobList(jobRecruit, {
        onSuccess: (data) => {
          if (isMounted) {
            const filteredJobs = data?.data?.content?.filter(
              (job: Recruitment) => job.url !== id
            );
            setJobList(filteredJobs);
          }
        },
      });
    }
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      {jobData ? (
        <>
          <MainLayout>
            <div className="mx-auto max-w-screen-xl">
              <div className="2xl:px-9 md:px-16 pb-20">
                <BreadCrumb />
                <div className="pt-10">
                  <Row gutter={[24, 8]}>
                    <Col xs={24} lg={18} xl={18}>
                      <BlockJobDetail
                        title={jobTitle}
                        id={id}
                        jobData={jobData}
                      />
                    </Col>
                    <Col xs={24} lg={6} xl={6}>
                      <div>
                        <div className="hidden lg:flex items-center justify-center w-full pb-16 pt-10">
                          <Button
                            style={{
                              background: '#D62027',
                              borderRadius: '50px',
                              fontWeight: 'inherit',
                              color: '#FFF',
                            }}
                            icon={<RightOutlined />}
                            iconPosition="end"
                            size="large"
                            className=""
                            onClick={() => {
                              navigate(`/jobs/apply/${jobData.url}`);
                            }}
                          >
                            Ứng tuyển ngay
                          </Button>
                        </div>
                        <div>
                          {jobList ? (
                            <>
                              <Title
                                level={4}
                                style={{
                                  color: '#46494F',
                                  textAlign: 'center',
                                }}
                              >
                                VIỆC LÀM GỢI Ý
                              </Title>
                              {jobList.map((item) => (
                                <CardJob
                                  key={item.id}
                                  type="mini"
                                  data={item}
                                  size="sm"
                                  style={{ marginBottom: '10px' }}
                                />
                              ))}
                              <div className="hidden sm:block">
                                <JobAdsPoster />
                              </div>
                              <div className="block pt-5 sm:hidden">
                                <img alt="bottom-ads" src={jobListBotAd} />
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </MainLayout>
        </>
      ) : (
        <Spin fullscreen />
      )}
    </>
  );
};

export default JobDetailPage;
