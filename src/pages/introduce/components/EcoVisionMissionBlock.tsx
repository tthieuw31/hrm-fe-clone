import React from 'react';
import bgrTamnhin from '../../../assets/jpg/bgr_tamnhin2.jpg';
import {
  ChuyenNghiepIcon,
  DoiVoiCongDongIcon,
  DoiVoiNguoiDungIcon,
  DoiVoiNVIcon,
  SangTaoIcon,
  TinCayIcon,
  TonTrongIcon,
  ViSKCongDongIcon,
} from 'assets/svg';
import { Space, Typography } from 'antd';

interface props {
  data?: any;
  company?: string;
}

const EcoVisionMissionBlock: React.FC<props> = () => {
  return (
    <div className="block max-w-screen-xl mx-auto 2xl:px-8 lg:px-16 md:px-16">
      <h2 className="text-center font-semibold text-2xl uppercase pb-5 cl_titeleblack">
        TẦM NHÌN - SỨ MỆNH
      </h2>

      <div className="hidden md:block">
        <div className="max-w-screen-xl m-auto pt-7 pb-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 col-start-1 relative">
              <div
                className="section-bg hidden md:block rounded-lg"
                style={{
                  objectFit: 'cover',
                  minHeight: '230px',
                  // maxWidth: '1170px',
                  backgroundImage: `url(${bgrTamnhin})`,
                }}
              ></div>
              <div className="vision-overlay grid grid-cols-12 gap-4">
                <div className="col-span-9 col-start-1">
                  <div className="items-vision w-4/5 pl-20 py-5 relative">
                    <div className="title-vision">
                      <p
                        className=" text-white uppercase "
                        style={{
                          lineHeight: '42px',
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      >
                        Tầm nhìn
                      </p>
                    </div>
                    <div className="list-vision">
                      <ul className="text-white">
                        <li>
                          <p
                            className="text-base"
                            style={{
                              lineHeight: '25px',
                              fontSize: '16px',
                              fontWeight: '400',
                            }}
                          >
                            Trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh
                            vực phân phối dược phẩm với chất lượng sản phẩm tốt
                            nhất, dịch vụ uy tín và giá thành hợp lý.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl m-auto pb-4 container-vision-mission">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 col-start-1 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 col-start-1">
                  <div className="items-vision px-20 py-5 relative">
                    <div className="title-vision">
                      <p
                        className="text-white uppercase"
                        style={{
                          lineHeight: '42px',
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      >
                        sứ mệnh
                      </p>
                    </div>
                    <div className="list-mission py-5">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiNguoiDungIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-base text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với người tiêu dùng
                              </p>
                              <p
                                className="text-white text-cebter px-5"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                }}
                              >
                                ECO Pharma cam kết cung cấp sản phẩm có chất
                                lượng cao, an toàn và hiệu quả, đồng thời đảm
                                bảo dịch vụ chuyên nghiệp và giá cả hợp lý.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiNVIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với nhân viên
                              </p>
                              <p
                                className="text-white text-cebter px-5"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                }}
                              >
                                ECO Pharma coi con người là tài sản quý giá nhất
                                nhất. Chúng tôi tập trung vào việc phát triển
                                đội ngũ nhân viên và xã hội, đặc biệt là việc
                                đào tạo là một trong những ưu tiên hàng đầu của
                                chúng tôi.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiCongDongIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với cộng đồng
                              </p>
                              <p
                                className="text-white text-center px-5"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                }}
                              >
                                ECO Pharma hành động dưới <br /> phương châm “Vì
                                sức khỏe, chia sẻ trách nhiệm và đồng hành với
                                sự
                                <br />
                                phát triển của cộng đồng.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title-vision">
                      <p
                        className="text-white uppercase"
                        style={{
                          lineHeight: '42px',
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      >
                        GIÁ TRỊ CỐT LÕI
                      </p>
                    </div>
                    <div className="list-core-values py-5">
                      <div className="grid grid-cols-5 gap-5">
                        <div className="col-span-1">
                          <div className="items-core-values">
                            <Space
                              direction="vertical"
                              className="flex w-full h-full justify-center items-center"
                            >
                              <div className="icon-core-values flex justify-center text-center pt-4">
                                <ChuyenNghiepIcon />
                              </div>
                              <div className="info-core-values text-center">
                                <p
                                  className="flex w-full h-full justify-center items-center text-white"
                                  style={{
                                    lineHeight: '42px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                  }}
                                >
                                  CHUYÊN NGHIỆP
                                </p>
                              </div>
                            </Space>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-core-values">
                            <Space
                              direction="vertical"
                              className="flex w-full h-full justify-center items-center"
                            >
                              <div className="icon-core-values flex justify-center text-center pt-4">
                                <TinCayIcon />
                              </div>
                              <div className="info-core-values text-center">
                                <p
                                  className="flex w-full h-full justify-center items-center text-white"
                                  style={{
                                    lineHeight: '42px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                  }}
                                >
                                  TIN CẬY
                                </p>
                              </div>
                            </Space>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-core-values">
                            <Space
                              direction="vertical"
                              className="flex w-full h-full justify-center items-center"
                            >
                              <div className="icon-core-values flex justify-center text-center pt-4">
                                <TonTrongIcon />
                              </div>
                              <div className="info-core-values text-center">
                                <p
                                  className="flex w-full h-full justify-center items-center text-white"
                                  style={{
                                    lineHeight: '42px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                  }}
                                >
                                  TÔN TRỌNG
                                </p>
                              </div>
                            </Space>
                          </div>
                        </div>

                        <div className="col-span-1">
                          <div className="items-core-values">
                            <Space
                              direction="vertical"
                              className="flex w-full h-full justify-center items-center"
                            >
                              <div className="icon-core-values flex justify-center text-center pt-4">
                                <SangTaoIcon />
                              </div>
                              <div className="info-core-values text-center">
                                <p
                                  className="flex w-full h-full justify-center items-center text-white"
                                  style={{
                                    lineHeight: '42px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                  }}
                                >
                                  SÁNG TẠO
                                </p>
                              </div>
                            </Space>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-core-values">
                            <Space
                              direction="vertical"
                              className="flex w-full h-full justify-center items-center"
                            >
                              <div className="icon-core-values flex justify-center text-center pt-4">
                                <ViSKCongDongIcon />
                              </div>
                              <div className="info-core-values text-center">
                                <p
                                  className="flex w-full h-full justify-center items-center text-white"
                                  style={{
                                    // lineHeight: '42px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                  }}
                                >
                                  VÌ SỨC KHỎE <br /> CỘNG ĐỒNG
                                </p>
                              </div>
                            </Space>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-2">
        <div className="max-w-screen-xl m-auto pb-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="container-vision col-span-12 col-start-1 relative">
              <div className="section-bg rounded-lg"></div>
              <div className="">
                <div className="items-vision lg:w-4/5 lg:pl-20 lg:py-5 relative">
                  <div className="title-vision">
                    <p
                      className=" text-white uppercase "
                      style={{
                        lineHeight: '42px',
                        fontSize: '20px',
                        fontWeight: '700',
                      }}
                    >
                      Tầm nhìn
                    </p>
                  </div>
                  <div className="list-vision">
                    <ul className="text-white">
                      <li>
                        <p
                          className="text-base"
                          style={{
                            lineHeight: '25px',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          Trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh
                          vực phân phối dược phẩm với chất lượng sản phẩm tốt
                          nhất, dịch vụ uy tín và giá thành hợp lý.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl m-auto pb-4 container-vision-mission">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 col-start-1 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 col-start-1">
                  <div className="items-vision py-5 relative">
                    <div className="title-vision">
                      <p
                        className="text-white uppercase"
                        style={{
                          lineHeight: '42px',
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      >
                        sứ mệnh
                      </p>
                    </div>
                    <div className="list-mission py-5">
                      <div className="grid grid-cols-1 gap-8">
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiNguoiDungIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-base text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với người tiêu dùng
                              </p>
                              <p
                                className="text-white text-cebter"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                  paddingLeft: '10%',
                                  paddingRight: '10%',
                                }}
                              >
                                ECO Pharma cam kết cung cấp sản phẩm có chất
                                lượng cao, an toàn và hiệu quả, đồng thời đảm
                                bảo dịch vụ chuyên nghiệp và giá cả hợp lý.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiNVIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với nhân viên
                              </p>
                              <p
                                className="text-white text-cebter px-5"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                  paddingLeft: '12%',
                                  paddingRight: '12%',
                                }}
                              >
                                ECO Pharma coi con người là tài sản quý giá nhất
                                nhất. Chúng tôi tập trung vào việc phát triển
                                đội ngũ nhân viên và xã hội, đặc biệt là việc
                                đào tạo là một trong những ưu tiên hàng đầu của
                                chúng tôi.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="items-mission">
                            <div className="icon-mission flex justify-center text-center py-4">
                              <div className="w-20 h-20">
                                <DoiVoiCongDongIcon />
                              </div>
                            </div>
                            <div className="info-mission py-4 px-4 text-center">
                              <p
                                className="title pb-4 text-white"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                Đối với cộng đồng
                              </p>
                              <p
                                className="text-white text-center px-5"
                                style={{
                                  lineHeight: '22px',
                                  fontSize: '16px',
                                  fontWeight: '400',
                                  paddingLeft: '10%',
                                  paddingRight: '10%',
                                }}
                              >
                                ECO Pharma hành động dưới <br /> phương châm “Vì
                                sức khỏe, chia sẻ trách nhiệm và đồng hành với
                                sự
                                <br />
                                phát triển của cộng đồng.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title-vision">
                      <p
                        className="text-white uppercase"
                        style={{
                          lineHeight: '42px',
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      >
                        GIÁ TRỊ CỐT LÕI
                      </p>
                    </div>
                  </div>

                  <div className="list-core-values">
                    <div className="grid grid-cols-6 gap-2">
                      <div className="col-span-2 col-start-2">
                        <div className="items-core-values">
                          <Space
                            direction="vertical"
                            className="flex w-full h-full justify-center items-center"
                          >
                            <div className="icon-core-values flex justify-center text-center pt-4">
                              <ChuyenNghiepIcon
                                style={{ height: '48px', width: '48px' }}
                              />
                            </div>
                            <div className="info-core-values text-center">
                              <p
                                className="flex w-full h-full justify-center items-center text-white"
                                style={{
                                  // lineHeight: '42px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                CHUYÊN NGHIỆP
                              </p>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="items-core-values">
                          <Space
                            direction="vertical"
                            className="flex w-full h-full justify-center items-center"
                          >
                            <div className="icon-core-values flex justify-center text-center pt-4">
                              <TinCayIcon
                                style={{ height: '42px', width: '45px' }}
                              />
                            </div>
                            <div className="info-core-values text-center">
                              <p
                                className="flex w-full h-full justify-center items-center text-white"
                                style={{
                                  lineHeight: '42px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                TIN CẬY
                              </p>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="items-core-values">
                          <Space
                            direction="vertical"
                            className="flex w-full h-full justify-center items-center"
                          >
                            <div className="icon-core-values flex justify-center text-center pt-4">
                              <TonTrongIcon
                                style={{ height: '47px', width: '70px' }}
                              />
                            </div>
                            <div className="info-core-values text-center">
                              <p
                                className="flex w-full h-full justify-center items-center text-white"
                                style={{
                                  lineHeight: '42px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                TÔN TRỌNG
                              </p>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="items-core-values">
                          <Space
                            direction="vertical"
                            className="flex w-full h-full justify-center items-center"
                          >
                            <div className="icon-core-values flex justify-center text-center pt-4">
                              <SangTaoIcon
                                style={{ height: '60px', width: '49px' }}
                              />
                            </div>
                            <div className="info-core-values text-center">
                              <p
                                className="flex w-full h-full justify-center items-center text-white"
                                style={{
                                  lineHeight: '42px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                SÁNG TẠO
                              </p>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="items-core-values">
                          <Space
                            direction="vertical"
                            className="flex w-full h-full justify-center items-center"
                          >
                            <div className="icon-core-values flex justify-center text-center pt-4">
                              <ViSKCongDongIcon
                                style={{ height: '56px', width: '44px' }}
                              />
                            </div>
                            <div className="info-core-values text-center">
                              <p
                                className="flex w-full h-full justify-center items-center text-white"
                                style={{
                                  // lineHeight: '42px',
                                  fontSize: '16px',
                                  fontWeight: '700',
                                }}
                              >
                                VÌ SỨC KHỎE <br /> CỘNG ĐỒNG
                              </p>
                            </div>
                          </Space>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoVisionMissionBlock;
