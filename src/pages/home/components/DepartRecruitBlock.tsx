import { Col, Row, Typography } from 'antd';
import {
  BusinessIcon,
  CustomerServiceIcon,
  DepartIcon,
  MktIcon,
  WareHouseIcon,
} from 'assets/svg';
import BlockDepartCard from 'components/BlockDepartCard';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Title } = Typography;

const DepartRecruitBlock: React.FC = () => {
  const navigate = useNavigate();

  const settings = useMemo(
    () => ({
      infinite: false,
      speed: 6000,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }),
    []
  );

  const departments = [
    {
      icon: <MktIcon />,
      title: 'KHỐI MARKETING<br />TRUYỀN THÔNG',
      code: 'MK',
    },
    { icon: <DepartIcon />, title: 'KHỐI VĂN PHÒNG', code: 'VP' },
    { icon: <BusinessIcon />, title: 'KHỐI KINH DOANH', code: 'KD' },
    {
      icon: <CustomerServiceIcon />,
      title: 'KHỐI DỊCH VỤ<br />KHÁCH HÀNG',
      code: 'DVKH',
    },
    { icon: <WareHouseIcon />, title: 'KHỐI KHO VẬN', code: 'KV' },
  ];

  return (
    <div className="bg-white">
      <div className="hidden lg:block pt-8 px-9 pb-8">
        <div className="mx-auto max-w-screen-xl md:px-16 2xl:px-9">
          <div className="w-full flex justify-center">
            <p
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#46494F',
              }}
            >
              KHỐI TUYỂN DỤNG
            </p>
          </div>
          <Row gutter={[8, 8]} className="justify-between mt-20">
            {departments.map((dept) => (
              <Col key={dept.code} lg={4}>
                <BlockDepartCard
                  type="department"
                  svgComponent={dept.icon}
                  title={dept.title}
                  onClick={() =>
                    navigate(`/jobs?blockDepartmentCode=${dept.code}`)
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="flex lg:hidden mt-8 mb-4 py-0">
        <div className="w-full">
          <div className="w-full text-center">
            <Title level={3} style={{ fontWeight: '700', color: '#46494F' }}>
              KHỐI TUYỂN DỤNG
            </Title>
          </div>

          <div className="w-full px-6 overflow-hidden">
            <Slider {...settings} className="slider-khoituyendung">
              {departments.map((dept) => (
                <BlockDepartCard
                  key={dept.code}
                  type="department"
                  svgComponent={dept.icon}
                  title={dept.title}
                  onClick={() =>
                    navigate('/jobs', { state: { bdCode: dept.code } })
                  }
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartRecruitBlock;
