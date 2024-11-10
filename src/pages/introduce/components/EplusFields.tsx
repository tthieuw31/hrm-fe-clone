import { Col, Row, Typography } from 'antd';
import React from 'react';
import CustomCard from './CustomCard';
import {
  ChamSocKhachHangIcon,
  CongNgheDuLieuIcon,
  NghienCuuThiTruongIcon,
  SocialMediaIcon,
  ThietKeSuKienIcon,
  TuVanChienLuocSangTaoIcon,
} from 'assets/svg';

interface props {
  data?: any;
  company?: string;
}

const EplusFields: React.FC<props> = ({ data, company }) => {
  return (
    <>
      <div className="hidden lg:block pb-20">
        <div className="grid grid-cols-6 gap-5 pt-12">
          <div className="col-span-2 relative">
            <CustomCard
              type="eplus"
              title="TƯ VẤN CHIẾN LƯỢC &<br /> SÁNG TẠO"
              svgComponent={<TuVanChienLuocSangTaoIcon className="w-48" />}
              description={[
                'Tư vấn chiến lược truyền thông;',
                'Ý tưởng sáng tạo cho chiến dịch truyền thông;',
                'Ý tưởng sáng tạo cho các ấn phẩm truyền thông.',
              ]}
            />
          </div>
          <div className="col-span-2 relative">
            <CustomCard
              type="eplus"
              title="THIẾT KẾ SẢN XUẤT &<br />TỔ CHỨC SỰ KIỆN"
              svgComponent={<ThietKeSuKienIcon className="w-48" />}
              description={[
                'Sản xuất video/phóng sự/live-stream;',
                'Thiết kế ấn phẩm truyền thông;',
                'Sản xuất nội dung truyền thông <br /> tiếp thị;',
                'Tổ chức sự kiện, workshop.',
              ]}
            />
          </div>
          <div className="col-span-2 relative">
            <CustomCard
              type="eplus"
              title="SOCIAL & MEDIA"
              svgComponent={<SocialMediaIcon className="w-48" />}
              description={[
                'Booking PR, Truyền hình, Mạng xã hội;',
                'Booking quảng cáo hiển thị;',
                'Dịch vụ SEO & Email marketing;',
                'Quảng cáo POSM...',
              ]}
            />
          </div>
          <div className="col-span-2 pt-32 relative">
            <CustomCard
              type="eplus"
              title="DỊCH VỤ KHÁCH HÀNG"
              svgComponent={<ChamSocKhachHangIcon className="w-48" />}
              description={[
                'Dịch vụ tổng đài;',
                'Tin nhắn chăm sóc khách hàng;',
                'Chương trình khách hàng thân thiết.',
              ]}
            />
          </div>
          <div className="col-span-2 pt-32 relative">
            <CustomCard
              type="eplus"
              title="NGHIÊN CỨU THỊ TRƯỜNG"
              svgComponent={<NghienCuuThiTruongIcon className="w-48" />}
              description={[
                'Dịch vụ khảo sát người tiêu dùng;',
                'Dịch vụ nghiên cứu thị trường <br /> theo yêu cầu.',
              ]}
            />
          </div>
          <div className="col-span-2 pt-32 relative">
            <CustomCard
              type="eplus"
              title="CÔNG NGHỆ & DỮ LIỆU"
              svgComponent={<CongNgheDuLieuIcon className="w-48" />}
              description={[
                'Tư vấn và xây dựng website, <br /> phần mềm;',
                'Tư vấn và phát triển cơ sở dữ liệu <br /> doanh nghiệp.',
              ]}
            />
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto pt-14 px-4 mb-10">
        <Row gutter={[8, 92]}>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="TƯ VẤN CHIẾN LƯỢC & SÁNG TẠO"
                svgComponent={<TuVanChienLuocSangTaoIcon className="w-32" />}
                description={[
                  'Tư vấn chiên lược truyền thông;',
                  'Ý tưởng sáng tạo cho chiến dịch truyền thông;',
                  'Ý tưởng sáng tạo cho các ấn phẩm truyền thông.',
                ]}
              />
            </div>
          </Col>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="THIẾT KẾ SẢN XUẤT & TỔ CHỨC SỰ KIỆN"
                svgComponent={<ThietKeSuKienIcon className="w-32" />}
                description={[
                  'Sản xuất video/phóng sự/live-stream;',
                  'Thiết kế ấn phẩm truyền thông;',
                  'Sản xuất nội dung truyền thông tiếp thị;',
                  'Tổ chức sự kiện, workshop.',
                ]}
              />
            </div>
          </Col>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="SOCIAL & MEDIA"
                svgComponent={<SocialMediaIcon className="w-32" />}
                description={[
                  'Booking PR, Truyền hình, Mạng xã hội;',
                  'Booking quảng cáo hiển thị;',
                  'Dịch vụ SEO & Email marketing;',
                  'Quảng cáo POSM...',
                ]}
              />
            </div>
          </Col>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="DỊCH VỤ KHÁCH HÀNG"
                svgComponent={<ChamSocKhachHangIcon className="w-32" />}
                description={[
                  'Dịch vụ tổng đài;',
                  'Tin nhắn chăm sóc khách hàng;',
                  'Chương trình khách hàng thân thiết.',
                ]}
              />
            </div>
          </Col>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="NGHIÊN CỨU THỊ TRƯỜNG"
                svgComponent={<NghienCuuThiTruongIcon className="w-32" />}
                description={[
                  'Dịch vụ khảo sát người tiêu dùng;',
                  'Dịch vụ nghiên cứu thị trường theo yêu cầu.',
                ]}
              />
            </div>
          </Col>
          <Col span={24} className="w-full flex justify-center">
            <div className="relative">
              <CustomCard
                type="eplus"
                title="CÔNG NGHỆ & DỮ LIỆU"
                svgComponent={<CongNgheDuLieuIcon className="w-32" />}
                description={[
                  'Tư vấn và xây dựng website, phần mềm;',
                  'Tư vấn và phát triển cơ sở dữ liệu doanh nghiệp.',
                ]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EplusFields;
