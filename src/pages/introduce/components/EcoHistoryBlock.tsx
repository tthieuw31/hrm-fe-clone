import React from 'react';
import {
  introHistoryBgrMobile,
  introHistoryBgrMobile2,
  introHistoryBgrMobile3,
  pgrThanhLap1,
  pgrThanhLap1Left,
  pgrThanhLap2,
  pgrThanhLap2Left,
} from 'assets/images';
import { Col, Row, Typography } from 'antd';

const EcoHistoryBlock: React.FC = () => {
  return (
    <div className="">
      <div className="py-5 md:py-20 p-2">
        <div className="title w-full h-full bgr-img-vector relative hidden md:block">
          <h2 className="uppercase text-center md:text-2xl font-semibold md:text-white py-2.5 relative z-10">
            Lịch sử hình thành và phát triển
          </h2>
          <div className="inline-flex items-center justify-center w-full md:hidden">
            <hr className="min-w-40 h-0.5 bg-gray-200 border-0 rounded " />
            <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2">
              <div className="w-2.5 h-2.5 pg-28388D"></div>
            </div>
          </div>
        </div>

        <div className="title bgr-img-vector w-full h-full relative md:hidden">
          <h2 className="uppercase title-text text-white text-center py-2.5 relative z-10">
            Lịch sử hình thành và <br /> phát triển
          </h2>

          <div className="inline-flex items-center justify-center pb-8 w-full md:hidden">
            <hr className="w-40 h-0.5 bg-gray-200 border-0 rounded " />
            <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2">
              <div className="w-2.5 h-2.5 border-2 border-inherit border-solid rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg m-auto pt-14 hidden md:block">
          <div className="grid grid-cols-6 gap-4">
            <div className="formation_development col-span-12 col-start-1">
              <div className="flex items-center">
                <div className="intro_historybegin relative">
                  <div className="bgr-historybegin">
                    <img
                      width="538px"
                      height="110px"
                      src={pgrThanhLap1}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-3 bottom-0 py-5 pr-48 pl-12">
                    <div className="text-white text-center md:text-base lg:text-base">
                      Thành lập Công ty cổ phần dược phẩm ECO trụ sở chính tại
                      Hà Nội
                    </div>
                  </div>
                </div>
                <hr className="min-w-9 h-0.5 pg-D62027 border-0 rounded" />
                <div className="time_hook_right">
                  <p>29/01/2008</p>
                </div>
              </div>
            </div>

            <div className="formation_development col-span-12 col-start-1">
              <div className="flex items-center flex-row-reverse">
                <div className="intro_historybegin_left relative">
                  <div className="bgr-historybegin">
                    <img
                      width="528px"
                      height="110px"
                      src={pgrThanhLap1Left}
                      alt=""
                    />
                  </div>
                  <div className="intro absolute top-4 bottom-0 pl-48 py-4 pr-8">
                    <div className="text-white text-center md:text-base lg:text-base">
                      Thành lập chi nhánh phía Nam tại <br /> Hồ Chí Minh
                    </div>
                  </div>
                </div>
                <hr className="min-w-9 h-0.5 pg-D62027 border-0 rounded " />
                <div className="time_hook_left">
                  <p>03/03/2008</p>
                </div>
              </div>
            </div>

            <div className="formation_development col-span-12 col-start-1">
              <div className="flex items-center">
                <div className="intro_historybegin relative">
                  <div className="bgr-historybegin">
                    <img
                      width="538px"
                      height="110px"
                      src={pgrThanhLap2}
                      alt=""
                    />
                  </div>
                  <div className="intro absolute top-0 bottom-0 py-5 pr-48 pl-12">
                    <div className="text-white text-center md:text-base lg:text-base">
                      ECO Pharma trở thành Công ty dược phẩm đầu tiên tại Việt
                      Nam sở hữu chuỗi nhà thuốc đạt chuẩn GPP uy tín
                    </div>
                  </div>
                </div>
                <hr className="min-w-9 h-0.5 pg-D62027 border-0 rounded " />
                <div className="time_hook_right">
                  <p>14/8/2009</p>
                </div>
              </div>
            </div>

            <div className="formation_development col-span-12 col-start-1">
              <div className="flex items-center flex-row-reverse">
                <div className="intro_historybegin_left relative">
                  <div className="bgr-historybegin">
                    <img
                      width="528px"
                      height="110px"
                      src={pgrThanhLap2Left}
                      alt=""
                    />
                  </div>
                  <div
                    className="intro absolute top-0 bottom-0 py-5 pr-8"
                    style={{ paddingLeft: '175px' }}
                  >
                    <div className="text-white text-center md:text-base lg:text-base">
                      Chính thức nhập khẩu và phân phối dòng thực phẩm chức năng
                      ECOGREEN từ Mỹ với sản phẩm đầu tiên là Sâm ALIPAS
                    </div>
                  </div>
                </div>
                <hr className="min-w-9 h-0.5 pg-D62027 border-0 rounded " />
                <div className="time_hook_left">
                  <p>11/10/2010</p>
                </div>
              </div>
            </div>

            <div className="formation_development col-span-12 col-start-1">
              <div className="flex items-center">
                <div className="intro_historybegin relative">
                  <div className="bgr-historybegin">
                    <img
                      width="538px"
                      height="110px"
                      src={pgrThanhLap1}
                      alt=""
                    />
                  </div>
                  <div className="intro w-full absolute top-6 bottom-0 text-center py-5 pr-48 pl-12">
                    <div className="text-white text-center md:text-base lg:text-base">
                      Thành lập chi nhánh tại Đà Nẵng
                    </div>
                  </div>
                </div>
                <hr className="min-w-9 h-0.5 pg-D62027 border-0 rounded" />
                <div className="time_hook_right">
                  <p>14/06/2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden relative p-1 flex flex-col justify-center items-center">
          <Row gutter={[16, 16]} className="pb-4 w-full">
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="time_hook_right">
                <p>29/01/2008</p>
              </div>
            </Col>
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="intro_historybegin_left relative">
                <div className="bgr-historybegin">
                  <img
                    width="528px"
                    height="110px"
                    src={introHistoryBgrMobile}
                    alt=""
                  />
                </div>
                <div className="intro">
                  <p className="text-white">
                    Thành lập Công ty cổ phần dược phẩm ECO trụ sở chính tại Hà
                    Nội
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="pb-3 w-full">
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="time_hook_right">
                <p>03/03/2008</p>
              </div>
            </Col>
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="intro_historybegin_left relative">
                <div className="bgr-historybegin">
                  <img
                    width="528px"
                    height="110px"
                    src={introHistoryBgrMobile}
                    alt=""
                  />
                </div>
                <div className="intro">
                  <p className="text-white">
                    Thành lập chi nhánh phía Nam tại <br /> thành phố Hồ Chí
                    Minh
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="pb-3 w-full">
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="time_hook_right">
                <p>14/08/2009</p>
              </div>
            </Col>
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="intro_historybegin_left relative">
                <div className="bgr-historybegin">
                  <img
                    width="528px"
                    height="110px"
                    src={introHistoryBgrMobile2}
                    alt=""
                  />
                </div>
                <div className="intro pl-2">
                  <p className="text-white">
                    ECO Pharma trở thành Công ty dược phẩm đầu tiên tại Việt Nam
                    sở hữu chuỗi nhà thuốc đạt chuẩn GPP uy tín
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="pb-3 w-full">
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="time_hook_right">
                <p>11/10/2010</p>
              </div>
            </Col>
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="intro_historybegin_left relative">
                <div className="bgr-historybegin">
                  <img
                    width="528px"
                    height="110px"
                    src={introHistoryBgrMobile3}
                    alt=""
                  />
                </div>
                <div className="intro pl-2">
                  <p className="text-white">
                    Nhập khẩu và phân phối dòng thực phẩm chức năng ECOGREEN từ
                    Mỹ với sản phẩm đầu tiên là Sâm ALIPAS
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="pb-3 w-full">
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="time_hook_right">
                <p>14/06/2016</p>
              </div>
            </Col>
            <Col span={24} className="flex w-full justify-start text-right">
              <div className="intro_historybegin_left relative">
                <div className="bgr-historybegin">
                  <img
                    width="528px"
                    height="110px"
                    src={introHistoryBgrMobile}
                    alt=""
                  />
                </div>
                <div className="intro pl-2">
                  <p className="text-white">Thành lập chi nhánh tại Đà Nẵng</p>
                </div>
              </div>
            </Col>
          </Row>

          <div className="absolute top-0 left-1/2 w-0.5 h-full pt-4">
            {/* <hr className="h-3/4 w-0.5 bg-gray-400" /> */}
            <div className="h-3/4">
              {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-500 rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoHistoryBlock;
