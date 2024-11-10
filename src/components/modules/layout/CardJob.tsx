import { Button, Card, Col, Row, Spin, Tag, Typography } from 'antd';
import { useCategories } from 'apis/categories/CategoriesContext';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';
import { Recruitment } from 'apis/home/HomeAPI';
import {
  EcoAvt,
  EplusAvt,
  NewCalendarOutline,
  NewLocationIcon,
  NewSalaryIcon,
  NewUserOutline,
} from 'assets/svg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { shortSalary } from 'utils/dataTransformUtils';
import { formatDateToString } from 'utils/formatDate';
export interface IProps {
  data: Recruitment;
  style?: any;
  size: 'sm' | 'md';
  type?: 'short' | 'full' | 'mini';
}

const { Text } = Typography;

export default function CardJob(props: IProps): React.ReactElement {
  const { data, style, size, type } = props;
  const { data: categoriesData, isLoading } = useCategories();

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

  const heightMap = {
    sm: '150px',
    md: '180px',
  };
  const cardHeight = heightMap[size];
  const navigate = useNavigate();

  const shortDescription = () => {
    const provincesList = data?.workplaceAddress?.filter(
      (item) => item.categoryType === 'P_PROVINCE_LIST'
    );

    let s = '';
    if (provincesList?.length > 0) {
      s += getProvince(provincesList[0]?.code);
    }
    if (provincesList?.length > 1) {
      s += ' và ' + (provincesList?.length - 1) + ' nơi khác...';
    }
    return s;
  };
  const numOfRecruit = () => {
    let s = '';
    if (data.numberOfRecruits) {
      s += `${data.numberOfRecruits}`;
    }
    return s;
  };

  const shortRecruitName = () => {
    let s = '';
    if (data.recruitmentName.length < 42) {
      s += data.recruitmentName;
    } else {
      const name = data.recruitmentName.slice(0, 42);
      s += `${name}...`;
    }
    return s;
  };

  const isNew = () => {
    const today = moment();
    const publicityDay = moment(data.publicityDay);
    return today.diff(publicityDay, 'days') <= 30;
  };

  const handleItemClick = (id: any) => {
    // const recruitmentName = data.recruitmentName.replace(/\s+/g, '-');
    navigate(`/jobs/detail/${id}`);
  };

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {data && type === 'short' && (
        <Card
          hoverable
          onClick={(e) => {
            e.stopPropagation();
            handleItemClick(data.url);
          }}
          className="drop-shadow-sm w-full h-full"
          size="small"
          style={style}
        >
          <Row gutter={32} align="middle" style={{ height: '100%' }}>
            <Col
              xs={6}
              lg={6}
              xl={6}
              style={{ height: '100%' }}
              // className="flex justify-center items-center mx-1"
            >
              {data.companyCode === 'ECO' ? (
                <EcoAvt className="absolute -top-10" />
              ) : data.companyCode === 'EPLUS' ? (
                <EplusAvt className="absolute -top-10" />
              ) : (
                <></>
              )}
            </Col>
            <Col xs={18} lg={18} xl={18}>
              <div className="overflow-hidden">
                <Row gutter={8}>
                  <Col span={19}>
                    <Text
                      ellipsis
                      className="text-base font-semibold text-base-min-1024"
                    >
                      {data.recruitmentName}
                    </Text>
                  </Col>
                  <Col span={4}>
                    {isNew() && (
                      <Tag className="font-medium mt-0.5" color="#44AB42">
                        Mới
                      </Tag>
                    )}
                  </Col>
                </Row>

                <div
                  className="flex items-center font-medium text-base-line30-min-1024 font-14px-line-30px"
                  style={{
                    whiteSpace: 'wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <NewLocationIcon />
                  <p className="ml-1.5 pt-0.5">{shortDescription()}</p>
                </div>
                <div
                  className="flex items-center font-medium text-blue-600 text-base-line30-min-1024 font-14px-line-30px"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <NewSalaryIcon />{' '}
                  <p className="ml-1.5 pt-0.5">{shortSalary(data)}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      )}
      {data && type === 'full' && (
        <Card
          hoverable
          onClick={(e) => {
            e.stopPropagation();
            handleItemClick(data.url);
          }}
          className="drop-shadow-sm w-full h-full card-job-full"
          size="small"
        >
          <Row gutter={[8, 8]} align="middle" className="lg:relative">
            <Col
              xs={8}
              lg={4}
              xl={4}
              className="flex justify-center lg:justify-center lg:items-center"
            >
              <div className="lg:absolute lg:-top-1">
                {data.companyCode === 'ECO' ? (
                  <EcoAvt />
                ) : data.companyCode === 'EPLUS' ? (
                  <EplusAvt />
                ) : (
                  <></>
                )}
              </div>
            </Col>
            <Col xs={16} lg={20} xl={20} className="flex justify-start">
              <div className="overflow-hidden">
                <Text ellipsis className="text-base font-semibold">
                  {data.recruitmentName}
                </Text>
                {isNew() && (
                  <Tag className="font-medium ml-2" color="#44AB42">
                    Mới
                  </Tag>
                )}
              </div>
            </Col>

            <Col xs={0} lg={4}></Col>
            <Col xs={12} lg={6} xl={6}>
              {/* Địa điểm và lương */}
              <div className="font-medium mb-1 flex text-base-line30-min-1024 font-14px-line-30px">
                <NewLocationIcon className="self-center" />
                <p className="ml-2">{shortDescription()}</p>
              </div>
              <div
                className="font-medium text-blue-600 flex text-base-line30-min-1024 font-14px-line-30px"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <NewSalaryIcon className="self-center" />
                <p className="ml-2">{shortSalary(data)}</p>
              </div>
            </Col>
            <Col xs={12} lg={10} xl={10}>
              <div className="font-light mb-1 flex text-base-line30-min-1024 font-14px-line-30px">
                <NewUserOutline className="self-center" />
                <p className="ml-2">{'Số lượng: ' + numOfRecruit()}</p>
              </div>
              <div className="flex text-base-line30-min-1024 font-14px-line-30px">
                <p className="flex">
                  <NewCalendarOutline className="self-center" />
                  <p className="ml-2">{' Hạn nộp: '}</p>
                </p>
                <p className="text-red-600 ml-1">
                  {formatDateToString(data.expireDate)}
                </p>
              </div>
            </Col>

            <Col
              xs={24}
              lg={4}
              xl={4}
              className="flex justify-center items-center box-submit lg:absolute lg:right-5"
            >
              <Button
                className="font-medium"
                type="primary"
                shape="round"
                style={{
                  background: '#D62027',
                  width: '134px ',
                  height: '33px',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/jobs/apply/${data.url}`);
                }}
              >
                <p
                  className="self-center"
                  style={{ fontWeight: 700, fontSize: '16px' }}
                >
                  ỨNG TUYỂN
                </p>
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 8]}></Row>
        </Card>
      )}
      {data && type === 'mini' && (
        <Card
          hoverable
          onClick={(e) => {
            e.stopPropagation();
            handleItemClick(data.url);
          }}
          className="drop-shadow-sm w-full h-full"
          size="small"
          style={style}
        >
          <Row gutter={8} align="middle" style={{ height: '100%' }}>
            <Col
              xs={6}
              lg={6}
              xl={6}
              style={{ height: '100%' }}
              // className="flex justify-center items-center"
            >
              {data.companyCode === 'ECO' ? (
                <EcoAvt className="absolute -top-12 w-11/12" />
              ) : data.companyCode === 'EPLUS' ? (
                <EplusAvt className="absolute -top-12 w-11/12" />
              ) : (
                <></>
              )}

              {/* <Col span={4}>
                {isNew() && (
                  <Tag className="font-medium" color="#44AB42">
                    Mới
                  </Tag>
                )}
              </Col> */}
            </Col>
            <Col xs={18} lg={18} xl={18}>
              <div className="overflow-hidden">
                <Row gutter={8}>
                  <Col span={18}>
                    <Text
                      ellipsis
                      className="text-base font-semibold text-base-min-1024"
                    >
                      {data.recruitmentName}
                    </Text>
                  </Col>
                  <Col span={6}>
                    {isNew() && (
                      <Tag className="font-medium" color="#44AB42">
                        Mới
                      </Tag>
                    )}
                  </Col>
                </Row>

                <div
                  className="flex items-center font-medium text-base-line30-min-1024 font-14px-line-30px"
                  style={{
                    whiteSpace: 'wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <NewLocationIcon />
                  <p className="ml-1">{shortDescription()}</p>
                </div>
                <div
                  className="flex items-center font-medium text-blue-600 text-base-line30-min-1024 font-14px-line-30px"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <NewSalaryIcon /> <p className="ml-1">{shortSalary(data)}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
}
