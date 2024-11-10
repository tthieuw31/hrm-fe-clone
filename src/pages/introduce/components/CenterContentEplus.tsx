import React from 'react';
import { Typography } from 'antd';
import { bgEplus, centerBgBannerEplus, logoHST } from 'assets/images';
import {
  EcoLogo,
  EcoPharmaLogo,
  TamAnhHosLogo,
  TamriLogo,
  VnvcLogo,
} from 'assets/svg';

const CenterContentEplus: React.FC = () => {
  return (
    <>
      <div className="bg-white my-10 w-full h-96 relative flex justify-center">
        <img
          src={bgEplus}
          alt="bgEplus"
          className="w-full lg:h-3/4 h-4/6 object-cover opacity-50"
        />

        <div className="absolute lg:top-16 top-10 flex justify-center items-center">
          <div className="mt-0 w-full lg:mx-auto mx-12">
            <p
              style={{
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '22px',
                textAlign: 'center',
                color: '#46494F',
              }}
            >
              Eplus Research là agency đầu tiên tại Việt Nam tiên phong trong
              lĩnh vực y tế <br /> sở hữu các đối tác chiến lược giá trị là các
              nhà cung cấp dịch vụ y tế, chăm sóc sức khoẻ hàng đầu
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <div className="flex justify-between px-4 items-center w-full max-w-screen-xl 2xl:px-8 lg:px-16 md:px-16">
            <EcoPharmaLogo className="eco-pharma-logo" />
            <TamAnhHosLogo className="tam-anh-hos-logo" />
            <VnvcLogo className="vnvc-logo" />
            <TamriLogo className="tamri-logo" />
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden relative flex justify-center">
        <img
          src={centerBgBannerEplus}
          alt=""
          className="center-bg-mobi object-cover max-w-screen"
        />

        <img
          className="absolute top-0 object-cover"
          src={logoHST}
          alt="logoHST"
        />

        <div className="absolute bottom-4 px-4">
          <Typography.Paragraph className="text-justify text-lg font-semibold text-white">
            Eplus Research là agency đầu tiên tại Việt Nam tiên phong trong lĩnh
            vực y tế sở hữu các đối tác chiến lược giá trị là các nhà cung cấp
            dịch vụ y tế, chăm sóc sức khoẻ hàng đầu bao gồm:
            <ul>
              <li className="text-justify pt-1 list-item text-white">
                Hệ thống trung tâm tiêm chủng VNVC
              </li>
              <li className="text-justify pt-1 list-item text-white">
                Hệ thống bệnh viện đa khoa Tâm Anh
              </li>
              <li className="text-justify list-item text-white">
                Hệ thống trung tâm dinh dưỡng Nutrihome
              </li>
            </ul>
          </Typography.Paragraph>
        </div>
      </div> */}

      {/* <div className="block md:hidden lg:hidden px-4 pt-5">
        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081511007/sumenh_ynghia_image.jpg"
            alt="sumenh_ynghia_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Tầm nhìn
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Eplus hướng đến việc trở thành nhà tư vấn và cung cấp dịch vụ toàn
            diện các giải pháp truyền thông 360o đa phương tiện hàng đầu Việt
            Nam. Hơn thế nữa, chúng tôi không ngừng nỗ lực và tìm kiếm những
            giải pháp tối ưu nhất hỗ trợ doanh nghiệp đạt mục tiêu kinh doanh.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081530058/sanpham_chatluong_image.jpg"
            alt="sanpham_chatluong_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Sứ mệnh
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Eplus mong muốn trở thành một agency mang đến chiến lược thông minh,
            mang tính đột phá, sáng tạo nhất nhằm tối ưu chi phí và mang lại
            hiệu quả cao cho doanh nghiệp. Đặc biệt, chúng tôi liên tục cải tiến
            quy trình làm việc để đẩy nhanh tiến độ hoàn thành kế hoạch đề ra.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081534000/moitruong_lamviec_image.jpg"
            alt="moitruong_lamviec_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Giá trị cốt lõi
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Eplus được hình thành bằng nỗ lực của nhân viên và sự tận tâm với
            khách hàng, chúng tôi chủ động phối hợp làm việc để đạt mục tiêu
            chung, luôn đặt mình vào vị trí của đối tác với tư duy cùng thắng.
          </Typography.Text>
        </div>
      </div> */}
    </>
  );
};

export default CenterContentEplus;
