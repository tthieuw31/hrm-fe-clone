import { EnvironmentOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Typography } from 'antd';
import { EcoLogo, EplusLogoCopy, NewLocationIcon } from 'assets/svg';

export default function AddressBlock(): JSX.Element {
  return (
    <>
      <div className="w-full h-full">
        <div className="mb-5">
          <EplusLogoCopy className="my-4" />
          <p
            style={{
              color: '#072996',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19px',
            }}
          >
            CÔNG TY CỔ PHẦN EPLUS RESEARCH
          </p>
        </div>

        <Row gutter={[32, 16]}>
          <Col xs={24} lg={6} xl={6}>
            <p
              // className="flex"
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Trụ sở chính Eplus
              Research
            </p>
            <p
              style={{
                color: '#46494F',
                marginTop: '7px',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              148 Hoàng Hoa Thám, P.12, Q.Tân Bình, TP.HCM
            </p>
          </Col>
          <Col xs={24} lg={6} xl={6}>
            <p
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Văn phòng Eplus
              Research
            </p>
            <p
              style={{
                color: '#46494F',
                marginTop: '7px',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              198/B6 Hoàng Văn Thụ, P.9, Q.Phú Nhuận, TP.HCM
            </p>
          </Col>
        </Row>

        <Divider />

        <div className="mb-5">
          <EcoLogo style={{ width: '116px' }} className="my-4 h-full" />
          <p
            style={{
              color: '#072996',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19px',
            }}
          >
            ECO PHARMA - CÔNG TY CỔ PHẦN DƯỢC PHẨM ECO
          </p>
        </div>
        <Row gutter={[32, 16]}>
          <Col xs={24} lg={6} xl={6}>
            <p
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Trụ sở chính ECO
              Pharma
            </p>
            <p
              style={{
                color: '#46494F',
                fontSize: '14px',
                marginTop: '7px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              180 Trường Chinh, P.Khương Thượng, Q.Đống Đa, TP.Hà Nội
            </p>
          </Col>
          <Col xs={24} lg={6} xl={6}>
            <p
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Văn phòng ECO Pharma
              1
            </p>
            <p
              style={{
                color: '#46494F',
                fontSize: '14px',
                marginTop: '7px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              148 Hoàng Hoa Thám, P.12, Q.Tân Bình, TP.HCM
            </p>
          </Col>
          <Col xs={24} lg={6} xl={6}>
            <p
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Văn phòng ECO Pharma
              2
            </p>
            <p
              style={{
                color: '#46494F',
                fontSize: '14px',
                marginTop: '7px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              198/B3 Hoàng Văn Thụ, P.9, Q.Phú Nhuận, TP.HCM
            </p>
          </Col>
          <Col xs={24} lg={6} xl={6}>
            <p
              style={{
                color: '#072996',
                fontSize: '13px',
                fontWeight: '700',
                lineHeight: '19px',
              }}
            >
              <EnvironmentOutlined className="text-base" /> Văn phòng ECO Pharma
              Miền Trung
            </p>
            <p
              style={{
                color: '#46494F',
                fontSize: '14px',
                marginTop: '7px',
                fontWeight: '400',
                lineHeight: '25px',
                marginLeft: '19px',
              }}
            >
              Lô 02-A4.3, Lô 03-A4.3 - Khu đất công viên Bắc Tượng Đài, P.Hoa
              Cường Bắc, Q.Hải Châu, TP.Đà Nẵng
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
