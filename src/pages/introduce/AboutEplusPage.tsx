import { MainLayout } from 'components';
import CarouselPicSlide from 'components/CarouselPicSlide';
import BreadCrumb from 'components/modules/BreadCrumbs';
import React, { useEffect, useState } from 'react';
import IntroduceParagraph from './components/IntroduceParagraph';
import { Card, Typography } from 'antd';
import { bannerAboutEcoMobi, vmvBackground } from 'assets/images';
import EplusFields from './components/EplusFields';
import {
  bannerEplusMobile,
  bottomBannerEplus,
  bottomBannerEplusMobile,
} from 'assets/jpg';
import { HeartHandRedIcon, TamNhinRedIcon, TargetRedIcon } from 'assets/svg';
import CenterContentEplus from './components/CenterContentEplus';
import { useMutation } from 'react-query';
import HomeAPI, { Banner } from 'apis/home/HomeAPI';

const AboutEplusPage: React.FC = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);

  useEffect(() => {
    getBannerList('EPLUS_BANNER');
  }, []);

  const { mutate: getBannerList } = useMutation(HomeAPI.getBanner, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setBannerList(data.data);
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });

  const filteredData = bannerList
    ? bannerList.filter((item: any) => item.typeDevice === 'WEB')
    : [];

  const filteredDataMobile = bannerList
    ? bannerList.filter((item: any) => item.typeDevice === 'MOBILE')
    : [];

  return (
    <MainLayout>
      <div className="hidden md:block">
        {/* <CarouselPicSlide
          data={bannerList}
          dots={false}
          arrow={false}
          type="carousel"
        /> */}
        <img
          alt=""
          src={filteredData[0]?.thumbnail}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="md:hidden">
        <img
          src={filteredDataMobile[0]?.thumbnail || bannerEplusMobile}
          alt="banner-eplus"
          className="object-contain w-full"
        />
      </div>

      <div className="bg-white lg:pb-28 lg:pt-14 max-w-screen-xl mx-auto">
        <div className="2xl:px-9 md:px-16 lg:pb-10">
          <BreadCrumb />
        </div>

        <IntroduceParagraph company="eplus" />
      </div>

      <div className="mx-auto max-w-screen-lg pt-14">
        <EplusFields />
      </div>

      {/* <div className="sm:hidden p-4 text-white items-center justify-center">
        <div className="pg-D62027 rounded-lg text-center mb-2">
          <h5 className="font-bold text-5xl p-6 drop-shadow-xl">
            Marketing 360
          </h5>
        </div>

        <div className="pg-072996 rounded-lg mb-2">
          <h5 className="font-semibold text-lg p-7 drop-shadow-xl text-justify">
            Social & Media
          </h5>
        </div>

        <div className="pg-072996 rounded-lg mb-2">
          <h5 className="font-semibold text-lg p-7 drop-shadow-xl text-justify">
            Tư vấn chiến lược, truyền thông marketing, quản lý dự án truyền
            thông, ý tưởng sáng tạo
          </h5>
        </div>

        <div className="pg-072996 rounded-lg mb-2">
          <h5 className="font-semibold text-lg p-7 drop-shadow-xl text-justify">
            Giải pháp công nghệ, phần mềm, dữ liệu...
          </h5>
        </div>

        <div className="pg-072996 rounded-lg mb-2">
          <h5 className="font-semibold text-lg p-7 drop-shadow-xl text-justify">
            Nghiên cứu thị trường, chăm sóc khách hàng...
          </h5>
        </div>
        <div className="pg-072996 rounded-lg mb-2">
          <h5 className="font-semibold text-lg p-7 drop-shadow-xl text-justify">
            Thiết kế sản xuất tổ chức sự kiện
          </h5>
        </div>
      </div> */}

      <section className="center_content_mobi">
        <CenterContentEplus />
      </section>

      {/* <div className="sm:hidden mx-auto max-w-screen-xl pb-8">
        <EplusFields />
      </div> */}

      <section className="vision_section flex justify-center">
        <div className="hidden bg-white w-full h-full relative md:flex justify-center max-w-screen-2xl">
          <img
            src={vmvBackground}
            alt="vmvBackground"
            className="md:px-1 md:w-full lg:w-full max-w-screen-xl"
          />

          <div className="absolute lg:top-7 xl:top-9 2xl:top-8 w-1/2 right-1/2 flex justify-end items-center lg:pr-7 xl:pr-10">
            <div className="sm:w-full lg:w-10/12 xl:w-4/5 2xl:w-3/4 2xl:pt-1.5 text-left">
              <Typography.Text className="font-semibold lg:text-xs xl:text-base 2xl:text-xl text-white">
                TẦM NHÌN
              </Typography.Text>
              <h5
                style={{ lineHeight: '1.3' }}
                className="mt-2 font-normal lg:text-xs xl:text-base 2xl:text-base text-justify text-white"
              >
                Eplus hướng đến việc trở thành nhà tư vấn và cung cấp dịch vụ
                toàn diện các giải pháp truyền thông 360 độ đa phương tiện hàng
                đầu Việt Nam. Hơn thế nữa, chúng tôi không ngừng nỗ lực và tìm
                kiếm những giải pháp tối ưu nhất hỗ trợ doanh nghiệp đạt mục
                tiêu kinh doanh.
              </h5>
            </div>
          </div>

          <div className="absolute lg:pl-36 lg:top-16 xl:top-20 2xl:top-20 xl:pl-48 2xl:pl-48">
            <div className="pl-2">
              <TamNhinRedIcon />
            </div>
          </div>

          <div className="absolute lg:top-52 xl:top-64 2xl:top-64 left-1/2 flex justify-start items-center">
            <div className="sm:w-full lg:w-10/12 lg:pt-2.5 xl:w-10/12 2xl:w-3/4 2xl:pt-3">
              <Typography.Text className="font-semibold lg:text-xs xl:text-base 2xl:text-xl text-white">
                SỨ MỆNH
              </Typography.Text>
              <h5
                style={{ lineHeight: '1.3' }}
                className="mt-2 font-normal lg:text-xs xl:text-base 2xl:text-base text-justify text-white"
              >
                Eplus mong muốn trở thành một agency mang đến chiến lược thông
                minh, mang tính đột phá, sáng tạo nhất nhằm tối ưu chi phí và
                mang lại hiệu quả cao cho doanh nghiệp. Đặc biệt, chúng tôi liên
                tục cải tiến quy trình làm việc để đẩy nhanh tiến độ hoàn thành
                kế hoạch đề ra.
              </h5>
            </div>
          </div>

          <div className="absolute lg:top-60 lg:pr-52 xl:top-72 xl:pr-64 2xl:top-72 2xl:pt-2 2xl:pr-64">
            <div className=" xl:pt-3 2xl:pt-1">
              <TargetRedIcon />
            </div>
          </div>

          <div className="absolute lg:bottom-14 xl:bottom-16 2xl:bottom-16 w-1/2 right-1/2 flex justify-end items-center lg:pr-7 xl:pr-10">
            <div className="md:w-full lg:w-10/12 xl:w-4/5 2xl:w-3/4 lg:pb-2 2xl:pb-1 text-left">
              <Typography.Text className="font-semibold lg:text-xs xl:text-base 2xl:text-xl text-white">
                GIÁ TRỊ CỐT LÕI
              </Typography.Text>
              <h5
                style={{ lineHeight: '1.3' }}
                className="mt-2 font-normal lg:text-xs xl:text-base 2xl:text-base text-justify text-white"
              >
                Eplus được hình thành bằng nỗ lực của nhân viên và sự tận tâm
                với khách hàng, chúng tôi chủ động phối hợp làm việc để đạt mục
                tiêu chung, luôn đặt mình là vào vị trí của đối tác với tư duy
                cùng thắng.
              </h5>
            </div>
          </div>

          <div className="absolute bottom-16 pl-48">
            <HeartHandRedIcon />
          </div>
        </div>

        <div className="flex lg:hidden">
          <div className="vision-section-item-container">
            <Card
              className="custom-card-eplus-vision mb-5 sm:my-0 bg-white h-full w-full"
              bordered={false}
              hoverable={true}
            >
              <div className="eplus-vision-card-icon flex items-center justify-center">
                <TamNhinRedIcon style={{ height: '34px', width: '64px' }} />
              </div>
              <div className="text-center mt-5">
                <p className="title-eplus-vision">TẦM NHÌN</p>
                <p className="text-white">
                  Eplus hướng đến việc trở thành nhà tư vấn và cung cấp dịch vụ
                  toàn diện các giải pháp truyền thông 360 độ đa phương tiện
                  hàng đầu Việt Nam. Hơn thế nữa, chúng tôi không ngừng nỗ lực
                  và tìm kiếm những giải pháp tối ưu nhất hỗ trợ doanh nghiệp
                  đạt mục tiêu kinh doanh.
                </p>
              </div>
            </Card>

            <Card
              className="custom-card-eplus-vision mx-2 mt-16 mb-5 sm:my-0 bg-white h-full w-full"
              bordered={false}
              hoverable={true}
            >
              <div className="eplus-vision-card-icon flex items-center justify-center pl-2.5">
                <TargetRedIcon style={{ height: '54px', width: '68px' }} />
              </div>
              <div className="text-center mt-5">
                <p className="title-eplus-vision">SỨ MỆNH</p>
                <p className="text-white">
                  Eplus mong muốn trở thành một agency mang đến chiến lược thông
                  minh, mang tính đột phá, sáng tạo nhất nhằm tối ưu chi phí và
                  mang lại hiệu quả cao cho doanh nghiệp. Đặc biệt, chúng tôi
                  liên tục cải tiến quy trình làm việc để đẩy nhanh tiến độ hoàn
                  thành kế hoạch đề ra.
                </p>
              </div>
            </Card>

            <Card
              className="custom-card-eplus-vision mx-2 mt-16 mb-5 sm:my-0 bg-white h-full w-full"
              bordered={false}
              hoverable={true}
            >
              <div className="eplus-vision-card-icon flex items-center justify-center">
                <HeartHandRedIcon style={{ height: '60px', width: '60px' }} />
              </div>
              <div className="text-center mt-5">
                <p className="title-eplus-vision">GIÁ TRỊ CỐT LÕI</p>
                <p className="text-white">
                  Eplus được hình thành bằng nỗ lực của nhân viên và sự tận tâm
                  với khách hàng, chúng tôi chủ động phối hợp làm việc để đạt
                  mục tiêu chung, luôn đặt mình là vào vị trí của đối tác với tư
                  duy cùng thắng.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="hidden lg:block w-full py-10 max-w-screen-xl mx-auto">
        <img
          src={bottomBannerEplus}
          alt="bottomBannerEplus"
          className="rounded-2xl"
        />
      </div>

      <div className="block lg:hidden w-full py-10 max-w-screen-xl px-4">
        <img
          src={bottomBannerEplusMobile}
          alt="bottomBannerEplus"
          className="rounded-2xl"
        />
      </div>
    </MainLayout>
  );
};

export default AboutEplusPage;
