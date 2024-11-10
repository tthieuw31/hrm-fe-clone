import {
  Carousel,
  Col,
  Divider,
  Form,
  Image,
  Row,
  Space,
  Spin,
  Typography,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { IBaseResponse } from 'apis/base/IBaseResponse';
import { useCategories } from 'apis/categories/CategoriesContext';
import HomeAPI, { GetListRequest, JobList } from 'apis/home/HomeAPI';
import { MainLayout } from 'components';
import BlockJobList from './components/BlockJobList';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_PAGE, SalaryFilter } from 'utils/constants';
import { openNotificationWithIcon } from 'utils/notification';
import JobFilterBlock from './components/JobFilterBlock';
import BreadCrumb from 'components/modules/BreadCrumbs';
import {
  jobListBotAd,
  tuyenContentSEO,
  tuyenDVKH,
  tuyenSocialContent,
  tuyentdv,
  tuyenTongDai,
} from 'assets/jpg';
import JobAdsPoster from 'components/JobAdsPoster';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

const { Title } = Typography;

const JobListPage = (): React.ReactElement => {
  const { data: categoriesData, isLoading } = useCategories();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const blockDepartmentCode = queryParams.get('blockDepartmentCode') || null;
  const experienceCode = queryParams.get('experienceCode') || null;
  const recruitmentName = queryParams.get('recruitmentName') || null;
  const workingPlace = queryParams.get('workingPlace') || null;
  const workTypeCode = queryParams.get('workTypeCode') || null;
  const jobTitlesCode = queryParams.get('jobTitlesCode') || null;
  const titleCode = queryParams.get('titleCode') || null;
  const salaryFrom = queryParams.get('salaryFrom') || 0;
  const salaryTo = queryParams.get('salaryTo') || 0;

  const [jobListData, setJobListData] = useState<IBaseResponse<JobList>>();
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const pageSize = 10;
  const initialSearchReq = location.state || {};
  const [form] = Form.useForm();
  const bdCode = location.state?.bdCode;

  const [jobRecruit, setJobRecruit] = useState<GetListRequest>({
    blockDepartmentCode: blockDepartmentCode,
    experienceCode: experienceCode,
    recruitmentName: recruitmentName,
    workingPlace: workingPlace,
    workTypeCode: workTypeCode,
    jobTitlesCode: jobTitlesCode,
    titleCode: titleCode,
    salaryFrom: Number(salaryFrom),
    salaryTo: Number(salaryTo),
    page: DEFAULT_PAGE,
    size: 10,
  });

  const { mutate: getJobList } = useMutation(HomeAPI.getList, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setJobListData(data);
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

  const getJobs = () => {
    getJobList({
      ...jobRecruit,
      page: Math.max(0, currentPage - 1),
      size: pageSize,
    });
  };

  useEffect(() => {
    getJobs();
  }, [currentPage]);

  const onFinish = (values: any) => {
    const selectedSalaryRange = SalaryFilter.find(
      (item) => item.value === values.salary
    );

    const newJobRecruit = {
      ...jobRecruit,
      blockDepartmentCode: values.blockDepartmentCode || '',
      workingPlace: values.workingPlace || '',
      workTypeCode: values.workTypeCode || '',
      experienceCode: values.experienceCode || '',
      jobTitlesCode: values.jobTitlesCode || '',
      titleCode: values.titleCode || '',
      recruitmentName: values.recruitmentName || '',
      salaryFrom: selectedSalaryRange ? selectedSalaryRange.salaryFrom : 0,
      salaryTo: selectedSalaryRange ? selectedSalaryRange.salaryTo : 0,
      page: DEFAULT_PAGE,
      size: 10,
    };

    setJobRecruit(newJobRecruit);

    const searchParams = new URLSearchParams();

    if (values.recruitmentName) {
      searchParams.append('recruitmentName', values.recruitmentName);
    }
    if (values.blockDepartmentCode) {
      searchParams.append('blockDepartmentCode', values.blockDepartmentCode);
    }
    if (values.workingPlace) {
      searchParams.append('workingPlace', values.workingPlace);
    }
    if (values.workTypeCode) {
      searchParams.append('workTypeCode', values.workTypeCode);
    }
    if (values.experienceCode) {
      searchParams.append('experienceCode', values.experienceCode);
    }
    if (values.jobTitlesCode) {
      searchParams.append('jobTitlesCode', values.jobTitlesCode);
    }
    if (values.titleCode) {
      searchParams.append('titleCode', values.titleCode);
    }
    if (selectedSalaryRange) {
      searchParams.append('salaryFrom', String(selectedSalaryRange.salaryFrom));
      searchParams.append('salaryTo', String(selectedSalaryRange.salaryTo));
    }

    // Sử dụng navigate để cập nhật URL mà không tải lại trang
    navigate({
      pathname: '/jobs',
      search: searchParams.toString(),
    });
  };

  useEffect(() => {
    if (
      jobRecruit.blockDepartmentCode !== initialSearchReq.blockDepartmentCode ||
      jobRecruit.workingPlace !== initialSearchReq.workingPlace ||
      jobRecruit.workTypeCode !== initialSearchReq.workTypeCode ||
      jobRecruit.experienceCode !== initialSearchReq.experienceCode ||
      jobRecruit.jobTitlesCode !== initialSearchReq.jobTitlesCode ||
      jobRecruit.titleCode !== initialSearchReq.titleCode ||
      jobRecruit.recruitmentName !== initialSearchReq.recruitmentName ||
      jobRecruit.salaryFrom !== 0 ||
      jobRecruit.salaryTo !== 0
    ) {
      getJobs();
    }
  }, [jobRecruit]);

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

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

  return (
    <>
      {jobListData ? (
        <MainLayout>
          <Content className="bg-white">
            <div className="mx-auto max-w-screen-xl">
              <div className="2xl:px-9 md:px-16">
                <BreadCrumb />
              </div>
            </div>

            <Title
              level={2}
              className="flex justify-center pb-2"
              style={{ color: '#46494F' }}
            >
              VIỆC LÀM
            </Title>

            <JobFilterBlock
              form={form}
              onFinish={onFinish}
              initialValues={jobRecruit}
            />
            <Divider className="mt-0 mb-16" />

            <div className="flex justify-center items-center pb-10 lg:px-14">
              <div className="max-w-screen-xl w-full pr-1.5">
                <Row gutter={[4, 32]}>
                  <Col xs={24} lg={18} xl={18}>
                    {jobListData?.data?.totalElements > 0 ? (
                      <div className="2xl:px-2">
                        <BlockJobList
                          data={jobListData?.data?.content}
                          currentPage={currentPage}
                          pageSize={pageSize}
                          totalElements={jobListData?.data?.totalElements}
                          onChangePage={(page) => {
                            setCurrentPage(page);
                          }}
                        />
                      </div>
                    ) : jobListData?.data?.totalElements == 0 ? (
                      <div className="flex p-10 justify-center items-center font-semibold text-xl">
                        <p>
                          Hiện tại không có tin tuyển dụng ở vị trí bạn tìm kiếm
                        </p>
                      </div>
                    ) : (
                      <Spin />
                    )}
                  </Col>
                  <Col xs={24} lg={6} xl={6}>
                    <div className="hidden sm:block">
                      <JobAdsPoster />
                    </div>
                    <div className="hidden sm:flex justify-center">
                      <Image
                        className="custom-image"
                        src="https://s3-api.e-plus.vn/portal/20240703/202407031534044/JEX_ads.jpg"
                        preview={false}
                      />
                    </div>
                    <div className="block sm:hidden px-4">
                      <img
                        alt="jex-ads"
                        src={jobListBotAd}
                        className="object-contain w-full"
                      />
                    </div>
                  </Col>
                </Row>
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

export default JobListPage;
