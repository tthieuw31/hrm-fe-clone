import {
  CalendarOutlined,
  CompassOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  IdcardOutlined,
  RightOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Button, Col, Divider, Row, Space, Spin, Typography } from 'antd';
import { JobDetail, JobList } from 'apis/home/HomeAPI';
import { useNavigate } from 'react-router-dom';
import { shortSalary } from 'utils/dataTransformUtils';
import { formatDateToString } from 'utils/formatDate';
import { useCategories } from 'apis/categories/CategoriesContext';
import { EcoAvt, EplusAvt, NewSalaryIcon } from 'assets/svg';
import ShareComponent from 'components/ShareComponent';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

const { Text, Title } = Typography;

interface Props {
  id?: any;
  title?: string;
  jobData: JobDetail;
  jobList?: JobList;
}

export default function BlockJobDetail(props: Props): JSX.Element {
  const { id, title, jobData, jobList } = props;
  const { data: categoriesData, isLoading } = useCategories();

  const navigate = useNavigate();

  const getEducation = (code: string) => {
    const education = categoriesData?.listEducationLevel.find(
      (item: any) => item.code === code
    );
    return education ? education.name : code;
  };

  const getExperience = (code: string) => {
    const experience = categoriesData?.listExperience.find(
      (item: any) => item.code === code
    );
    return experience ? experience.name : code;
  };

  const getWorkType = (code: string) => {
    const workType = categoriesData?.listTypeOfWorks.find(
      (item: any) => item.code === code
    );
    return workType ? workType.name : code;
  };

  const getLevel = (code: string) => {
    const level = categoriesData?.listCareerTitles.find(
      (item: any) => item.code === code
    );
    return level ? level.name : code;
  };

  const getProvince = (code: string) => {
    const province = categoriesData?.listProvinces.find(
      (item: any) => item.code === code
    );

    if (province) {
      return province.name.includes('Thành phố ')
        ? province.name.replace('Thành phố ', 'TP. ')
        : province.name;
    }

    return code;
  };

  const shortAddress = (workplaceAddress: any) => {
    if (!Array.isArray(workplaceAddress)) {
      return '';
    }
    const provincesList = workplaceAddress.filter(
      (item: any) => item.categoryType === 'P_PROVINCE_LIST'
    );

    let s = '';
    if (provincesList.length > 0) {
      s += getProvince(provincesList[0]?.code);
    }
    if (provincesList.length > 1) {
      s = provincesList.map((item: any) => getProvince(item.code)).join(`, `);
      // s += ' và ' + (provincesList.length - 1) + ' nơi khác...';
    }
    return s;
  };

  if (isLoading) return <Spin size="small" fullscreen />;
  if (isLoading) return <Spin size="small" fullscreen />;
  if (isLoading) return <Spin size="small" fullscreen />;
  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {jobData ? (
        <div className="">
          <Row gutter={16} className="pb-4 relative">
            <Col xs={24} lg={24} xl={24}>
              <Title level={2} className="text-black">
                {jobData?.recruitmentName}
              </Title>
            </Col>
            <Col xs={24} lg={6} xl={6}>
              <Row className="align-middle items-center">
                <Space size="small">
                  <p
                    style={{
                      color: '#46494F',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '30px',
                    }}
                  >
                    Hạn nộp:{' '}
                  </p>
                  <p
                    style={{
                      color: '#D62027',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '30px',
                    }}
                  >
                    {formatDateToString(jobData?.expireDate)}
                  </p>
                </Space>
              </Row>
            </Col>
            <Col xs={24} lg={12} xl={12}>
              <Row className="align-middle items-center">
                {/* <DollarOutlined
                  style={{ fontSize: '20px', marginRight: '5px' }}
                /> */}
                <Space size="small">
                  <NewSalaryIcon
                    style={{
                      position: 'absolute',
                      width: '16px',
                      height: '20px',
                      top: '3',
                    }}
                  />
                  <p
                    style={{
                      marginLeft: '15px',
                      color: '#46494F',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '30px',
                    }}
                  >
                    Thu nhập:{' '}
                  </p>
                  <p
                    style={{
                      color: '#035590',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '30px',
                    }}
                  >
                    {shortSalary(jobData)}
                  </p>
                </Space>
              </Row>
            </Col>
          </Row>

          <div className="relative">
            <div className="absolute lg:hidden flex items-end justify-end bottom-0 right-0 w-full">
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
                  navigate(
                    `/jobs/apply/${jobData?.id}-${encodeURIComponent(
                      jobData.recruitmentName
                    )}`
                  );
                }}
              >
                Ứng tuyển ngay
              </Button>
            </div>

            <div className="lg:flex lg:w-full lg:justify-between">
              {jobData?.companyCode === 'ECO' ? (
                <EcoAvt />
              ) : jobData?.companyCode === 'EPLUS' ? (
                <EplusAvt />
              ) : null}

              <div className="flex items-center">
                <p className="mr-2">Chia sẻ</p>
                <ShareComponent
                  title={jobData.recruitmentName}
                  description={jobData.descriptionRecruitment}
                />
              </div>
            </div>
          </div>

          <Divider />
          <p
            style={{
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '26px',
              color: '#46494F',
              marginBottom: '15px',
            }}
          >
            CHI TIẾT TUYỂN DỤNG
          </p>

          <div className="job-info-container">
            <Row gutter={[8, 16]} className="p-2">
              <Col xs={24} lg={12} xl={8}>
                <Row className="align-middle items-center text-white">
                  <FieldTimeOutlined
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />
                  <Space size="small">
                    <Text className="text-base text-white">Hình thức: </Text>
                    <Text className="text-base text-white" strong>
                      {/* {workType?.name} */}
                      {getWorkType(jobData?.workTypeCode)}
                    </Text>
                  </Space>
                </Row>
              </Col>

              <Col xs={24} lg={12} xl={6}>
                <Row className="align-middle items-center">
                  <FileTextOutlined
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />
                  <Space size="small">
                    <Text className="text-base text-white">Bằng cấp: </Text>
                    <Text className="text-base text-white" strong>
                      {getEducation(jobData?.educationLevelCode)}
                    </Text>
                  </Space>
                </Row>
              </Col>

              <Col xs={24} lg={12} xl={10}>
                <Row className="align-middle items-center text-white">
                  <CalendarOutlined
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />
                  <Space size="small">
                    <Text className="text-base text-white mr-1">
                      Kinh nghiệm:
                    </Text>
                    <Text className="text-base text-white" strong>
                      {/* {exp?.name} */}
                      {getExperience(jobData?.experienceCode)}
                    </Text>
                  </Space>
                </Row>
              </Col>

              <Col xs={24} lg={12} xl={8}>
                <Row className="align-middle items-center text-white">
                  <IdcardOutlined
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />
                  <Space size="small">
                    <Text className="text-base text-white mr-1">Cấp bậc:</Text>
                    <Text className="text-base text-white" strong>
                      {/* {shortTitle?.name} */}
                      {getLevel(jobData?.jobTitlesCode)}
                    </Text>
                  </Space>
                </Row>
              </Col>

              <Col xs={24} lg={12} xl={6}>
                <Row className="align-middle items-center text-white">
                  <TeamOutlined
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />
                  <Space size="small">
                    <Text className="text-base text-white mr-1">Số lượng:</Text>
                    <Text className="text-base text-white" strong>
                      {jobData?.numberOfRecruits}
                    </Text>
                  </Space>
                </Row>
              </Col>

              <Col xs={24} lg={12} xl={10}>
                <Row
                  gutter={0}
                  className="align-middle items-center text-white"
                >
                  <Col span={9} className="flex self-start">
                    <CompassOutlined
                      style={{ fontSize: '20px', marginRight: '5px' }}
                    />
                    <Text className="text-base text-white mr-1">
                      Nơi làm việc:
                    </Text>
                  </Col>
                  <Col span={15}>
                    <Text className="text-base text-white" strong>
                      <strong>{shortAddress(jobData.workplaceAddress)}</strong>
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row gutter={24}>
            <Col xs={24} lg={24} xl={24}>
              <Divider />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '26px',
                  color: '#46494F',
                  marginBottom: '15px',
                }}
              >
                PHÚC LỢI
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: jobData.benefits }}
                className="mb-4 text-base content"
              />
              <Divider />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '26px',
                  color: '#46494F',
                  marginBottom: '15px',
                }}
              >
                MÔ TẢ CÔNG VIỆC
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: jobData.descriptionRecruitment,
                }}
                className="mb-4 text-base content"
              />
              <Divider />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '26px',
                  color: '#46494F',
                  marginBottom: '15px',
                }}
              >
                YÊU CẦU CÔNG VIỆC
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: jobData.jobRecruitment }}
                className="mb-10 text-base content"
              />
              <Divider />

              <div className="flex items-center justify-end">
                <p className="mr-2">Chia sẻ</p>
                <ShareComponent
                  title={jobData.recruitmentName}
                  description={jobData.descriptionRecruitment}
                />
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
