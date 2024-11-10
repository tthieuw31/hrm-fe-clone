import { Typography } from 'antd';
import { DanhHieuIcon } from 'assets/svg';
import React from 'react';

interface props {
  data?: any;
  company?: string;
}

const { Title, Paragraph, Text } = Typography;

const AchieveBlock: React.FC<props> = ({ data, company }) => {
  return (
    <>
      {company && company === 'eco' && (
        <div className="mx-auto">
          <div className="title bgr-img-vector relative">
            <h2 className="title-text text-center py-2.5 relative z-10">
              DANH HIỆU ĐẠT ĐƯỢC
            </h2>
            {/* <div className="inline-flex items-center justify-center w-full md:hidden">
              <hr className="min-w-40 h-0.5 bg-gray-200 border-0 rounded " />
              <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2">
                <div className="w-2.5 h-2.5 pg-28388D"></div>
              </div>
            </div> */}
          </div>

          {/* <div className="block md:hidden">
            <h2 className="text-center text-3xl md:text-2xl font-medium py-2.5 relative z-10">
              DANH HIỆU ĐẠT ĐƯỢC
            </h2>
          </div> */}

          <div className=" max-w-screen-xl m-auto pt-10">
            <div className="grid grid-cols-8 gap-6">
              <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 items-danhhieu">
                <div className="grid lg:grid-cols-8 gap-4">
                  <div className="icon-danhhieu">
                    <div className="icon-danhhieu">
                      <div className="svg-icon-container">
                        <DanhHieuIcon className="svg-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 col-start-2 intro-danhhieu">
                    <div className="text-left pr-4">
                      <p className="text-xl">
                        Top 500 doanh nghiệp tư nhân lớn nhất Việt Nam 2014
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 items-danhhieu">
                <div className="grid lg:grid-cols-8 gap-4">
                  <div className="icon-danhhieu">
                    <div className="icon-danhhieu">
                      <div className="svg-icon-container">
                        <DanhHieuIcon className="svg-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 col-start-2 intro-danhhieu">
                    <div className="text-left pr-4">
                      <p className="text-xl">
                        Vị trí thứ 7 Top 500 doanh nghiệp tăng trưởng nhất Việt
                        Nam 2015
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 items-danhhieu">
                <div className="grid lg:grid-cols-8 gap-4">
                  <div className="icon-danhhieu">
                    <div className="icon-danhhieu">
                      <div className="svg-icon-container">
                        <DanhHieuIcon className="svg-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 col-start-2 intro-danhhieu">
                    <div className="text-left pr-4">
                      <p className="text-xl">Doanh nghiệp văn hóa UNESCO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 items-danhhieu">
                <div className="grid lg:grid-cols-8 gap-4">
                  <div className="icon-danhhieu">
                    <div className="icon-danhhieu">
                      <div className="svg-icon-container">
                        <DanhHieuIcon className="svg-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 col-start-2 intro-danhhieu">
                    <div className="text-left pr-4">
                      <p className="text-xl">
                        Hệ thống nhà thuốc trong nước đầu tiên đạt cả ba chứng
                        nhận của Tổ chức Y tế Thế giới: WHO – GSP (thực hành tốt
                        bảo quản thuốc), WHO – GDP (thực hành tốt phân phối
                        thuốc), WHO – GPP (thực hành tốt nhà thuốc)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 items-danhhieu">
                <div className="grid lg:grid-cols-8 gap-4">
                  <div className="icon-danhhieu">
                    <div className="icon-danhhieu">
                      <div className="svg-icon-container">
                        <DanhHieuIcon className="svg-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 col-start-2 intro-danhhieu">
                    <div className="text-left pr-4">
                      <p className="text-xl">
                        Hệ thống quản lý chất lượng 9001:2008 do Tổ chức TUV
                        (Đức) cấp và hàng loạt các giải thưởng, chứng nhận có
                        giá trị khác
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full pt-12">
            <div className="px-2 md:px-16 md:w-4/6 max-w-screen-lg">
              <p
                className="text-center"
                style={{
                  lineHeight: '25px',
                  fontSize: '16px',
                  color: '#00000',
                  fontWeight: '400',
                }}
              >
                Dấu chân của người ECO Pharma đã quen trên con đường đến với hơn
                25.000 nhà thuốc trên toàn quốc và tiếp tục vươn tới các nhà
                thuốc nhỏ hơn, xa hơn nữa đến trực tiếp với người tiêu dùng để
                thực hiện quyết tâm của Tổng Giám Đốc là mang sản phẩm đến vùng
                sâu vùng xa, biên giới hải đảo chỉ cần ở nơi đó có người dân cần
                sản phẩm của ECO Pharma.
              </p>
            </div>
          </div>
        </div>
      )}
      {company && company === 'eplus' && (
        <div className="introduce-container">
          <div className="flex flex-col justify-center content-center">
            <Title level={2} className="text-center">
              EPLUS - CÔNG TY CỔ PHẦN EPLUS RESEARCH
            </Title>
            <Paragraph className="text-center md:text-base">
              “Truyền thông tiếp thị và hơn thế nữa!”
            </Paragraph>
          </div>
        </div>
      )}
    </>
  );
};

export default AchieveBlock;
