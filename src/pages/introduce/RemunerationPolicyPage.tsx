import { MainLayout } from 'components';
import BreadCrumb from 'components/modules/BreadCrumbs';
import React from 'react';
import { Typography } from 'antd';
import CustomCard from './components/CustomCard';
import {
  PolicyDiversity,
  PolicyGiftCoint,
  PolicyHandSetting,
  PolicyHandTogether,
  PolicyMedical,
  PolicyTimeCoin,
} from 'assets/svg';

const remunerationPolicies = [
  {
    type: 'chinhsach',
    title: 'CHẾ ĐỘ LƯƠNG, THƯỞNG',
    description: [
      'Cam kết thỏa thuận lương xứng đáng theo năng lực và tái đánh giá hiệu quả công việc, xem xét tăng lương theo định kỳ;',
      'Thưởng theo hiệu quả kinh doanh và công việc.',
    ],
    svgComponent: <PolicyGiftCoint />,
  },
  {
    type: 'chinhsach',
    title: 'PHÚC LỢI VƯỢT TRỘI',
    description: [
      'Chế độ bảo hiểm, Team building;',
      'Quà mừng các dịp Lễ, nghỉ Tết, 8/3, 30/4 – 1/5, 2/9, Tết dương lịch, bản thân kết hôn, hiếu hỷ, sinh nhật, ốm đau nằm viện, Quốc tế thiếu nhi – Tết Trung thu (dành cho con CBNV);',
      'Chúc mừng CBNV sinh con lên tới 1 tháng lương/ lần sinh.',
    ],
    svgComponent: <PolicyHandTogether />,
  },
  {
    type: 'chinhsach',
    title: 'CHĂM SÓC SỨC KHỎE TOÀN DIỆN',
    description: [
      'Chính sách Bảo hiểm sức khỏe cho CBNV;',
      'Khám sức khoẻ định kỳ chuyên sâu tại Hệ thống Bệnh viện đa khoa Tâm Anh chất lượng 5 sao;',
      'Ưu đãi và miễn phí nhiều loại vắc-xin tiêm chủng tại VNVC;',
      'Chính sách mua hàng ưu đãi hấp dẫn với sản phẩm ECOGREEN.',
    ],
    svgComponent: <PolicyMedical />,
  },
  {
    type: 'chinhsach',
    title: 'NGHỈ PHÉP HƯỞNG LƯƠNG',
    description: [
      'Nghỉ phép năm: 12 ngày, làm việc đủ 5 năm được cộng thêm 1 ngày phép;',
      'Bản thân kết hôn: 3 ngày;',
      'Con kết hôn: 1 ngày;',
      'Gia đình có tang (tứ thân phụ mẫu, vợ, chồng, con, bố-mẹ nuôi): 3 ngày.',
    ],
    svgComponent: <PolicyTimeCoin />,
  },
  {
    type: 'chinhsach',
    title: 'ĐÀO TẠO VÀ PHÁT TRIỂN',
    description: [
      'Đẩy mạnh giáo dục đào tạo CBNV với quy mô lớn trong nước và quốc tế, hội tụ nhiều chuyên gia uy tín đầu ngành đứng lớp;',
      'Là cơ hội lớn để được làm, được học và nâng cao kiến thức, định hướng đảm nhận nhiều vị trí quản lý trong đội ngũ nhân sự quy mô hơn 20.000 người tại Hệ sinh thái y tế chăm sóc sức khỏe chất lượng cao.',
    ],
    svgComponent: <PolicyHandSetting />,
  },
  {
    type: 'chinhsach',
    title: 'NGUỒN NHÂN LỰC ĐA DẠNG',
    description: [
      'Hệ sinh thái chăm sóc sức khỏe chất lượng cao từ y tế dự phòng đến dược phẩm, khám chữa bệnh và sở hữu agency đầu tiên tại Việt Nam tiên phong trong lĩnh vực y tế;',
      'Sự đa dạng ngành nghề tương ứng đa dạng nguồn nhân lực từ công việc, tuổi tác, giới tính, vùng miền…',
    ],
    svgComponent: <PolicyDiversity />,
  },
];

const RemunerationPolicyPage: React.FC = () => (
  <MainLayout>
    {/* <div className="bg-white"></div> */}

    <div className="overview-block-eco mx-auto">
      <div className="mx-auto max-w-screen-xl">
        <div className="2xl:px-9 md:px-16">
          <BreadCrumb />
        </div>
        <div className="introduce-container px-5 py-5">
          <div className="flex flex-col justify-center content-center">
            <Typography.Title
              level={2}
              className="text-center"
              style={{ color: '#46494F' }}
            >
              CHÍNH SÁCH ĐÃI NGỘ
            </Typography.Title>
            <Typography.Text className="text-center md:text-base pb-2 mb-0">
              Với Công ty “Con người là tài sản quý giá nhất”
            </Typography.Text>
            <Typography.Text
              className="text-center md:text-base pb-0 mb-0"
              style={{ color: '#072996' }}
            >
              Hãy khám phá những chính sách nổi bật trong hàng loạt chính sách
              đãi ngộ dành cho Cán bộ nhân viên (CBNV)!
            </Typography.Text>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl block pb-20 pl-6 pr-10 2xl:px-4 lg:px-16 md:px-16">
          <div className="grid grid-cols-6 gap-10 pt-12">
            {remunerationPolicies.map((policy, index) => (
              <div
                key={index}
                className="lg:col-span-2 sm:col-span-3 col-span-6 relative"
              >
                <CustomCard
                  svgComponent={policy.svgComponent}
                  type={policy.type}
                  title={policy.title}
                  description={policy.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default RemunerationPolicyPage;
