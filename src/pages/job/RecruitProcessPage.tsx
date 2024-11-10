import { Typography } from 'antd';
import { imageQuyTrinh } from 'assets/images';
import {
  IconApplyResult,
  IconFindEmployee,
  IconInterview,
  IconJobTrying,
  IconPeople3Star,
} from 'assets/svg';
import { MainLayout } from 'components';
import BreadCrumb from 'components/modules/BreadCrumbs';

const steps = [
  { title: 'TIẾP NHẬN & SÀNG LỌC HỒ SƠ', icon: <IconFindEmployee />, key: 1 },
  { title: 'PHỎNG VẤN VÒNG 1 (HR)', icon: <IconInterview />, key: 2 },
  {
    title: 'PHỎNG VẤN VÒNG 2<br />(QUẢN LÝ CHUYÊN MÔN)',
    icon: <IconInterview />,
    key: 3,
  },
  {
    title: `PHỎNG VẤN VÒNG 3 (QUẢN LÝ CẤP CAO/<br />LÀM BÀI KIỂM TRA NĂNG LỰC NẾU CÓ)`,
    icon: <IconInterview />,
    key: 4,
  },
  { title: 'KẾT QUẢ TUYỂN DỤNG', icon: <IconApplyResult />, key: 5 },
  { title: 'TUYỂN DỤNG THỬ VIỆC', icon: <IconJobTrying />, key: 6 },
  { title: 'TUYỂN DỤNG CHÍNH THỨC', icon: <IconPeople3Star />, key: 7 },
];

const stepsMobile = [
  { title: 'TIẾP NHẬN & SÀNG LỌC HỒ SƠ', icon: <IconFindEmployee />, key: 1 },
  { title: 'PHỎNG VẤN VÒNG 1 (HR)', icon: <IconInterview />, key: 2 },
  {
    title: 'PHỎNG VẤN VÒNG 2<br />(QUẢN LÝ CHUYÊN MÔN)',
    icon: <IconInterview />,
    key: 3,
  },
  {
    title: `PHỎNG VẤN VÒNG 3 (QUẢN LÝ<br />CẤP CAO/LÀM BÀI KIỂM TRA<br />NĂNG LỰC NẾU CÓ)`,
    icon: <IconInterview />,
    key: 4,
  },
  { title: 'KẾT QUẢ TUYỂN DỤNG', icon: <IconApplyResult />, key: 5 },
  { title: 'TUYỂN DỤNG THỬ VIỆC', icon: <IconJobTrying />, key: 6 },
  { title: 'TUYỂN DỤNG CHÍNH THỨC', icon: <IconPeople3Star />, key: 7 },
];

const RecruitProcessPage = (): React.ReactElement => {
  return (
    <>
      <MainLayout>
        <div className="mx-auto max-w-screen-xl">
          <div className="2xl:px-9 md:px-16 pb-20">
            <div className="bg-white">
              <BreadCrumb />

              <div className="w-full text-center md:pb-10">
                <Typography.Title
                  level={2}
                  className="font-semibold cl_titeleblack"
                  style={{
                    color: '#46494F',
                  }}
                >
                  QUY TRÌNH TUYỂN DỤNG NHÂN SỰ
                </Typography.Title>
              </div>
              <section className="section_process">
                <div className="max-w-screen-lg m-auto pb-4 hidden lg:block">
                  <div className="grid grid-cols-6 gap-4">
                    {steps.map((step, index) => (
                      <div
                        key={step.key}
                        className="formation_development col-span-6 col-start-1 flex drop-shadow-lg"
                      >
                        <div
                          key={step.key}
                          className={`relative flex ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                          } w-full items-center`}
                        >
                          <div
                            className={`w-full container-recruit-policy py-3 px-4 rounded-full flex items-center justify-between ${
                              index % 2 === 0
                                ? 'border-blue-600 pg-00249C'
                                : 'border-red-600 pg-EC1C24'
                            } `}
                          >
                            {index % 2 !== 0 ? (
                              <>
                                <Typography.Text className="text-white text-5xl pl-2 font-black">
                                  {step.key}
                                </Typography.Text>
                                <p
                                  className="text-white text-center mx-4"
                                  dangerouslySetInnerHTML={{
                                    __html: step.title || '',
                                  }}
                                />
                                <div className=" text-white -mr-2 flex items-center justify-center w-16 h-16 border-2 border-white rounded-full">
                                  {step.icon}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-white -ml-2 flex items-center justify-center w-16 h-16 border-2 border-white rounded-full">
                                  {step.icon}
                                </div>
                                <p
                                  className="text-white text-center mx-4"
                                  dangerouslySetInnerHTML={{
                                    __html: step.title || '',
                                  }}
                                />
                                <Typography.Text className="text-white text-5xl pr-2 font-black">
                                  {step.key}
                                </Typography.Text>
                              </>
                            )}
                          </div>
                          <div
                            className={`absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                              index % 2 === 0 ? 'pg-00249C' : 'pg-EC1C24'
                            }`}
                          >
                            <div className="w-3 h-3 rounded-full border-2 border-white"></div>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-3/4 w-0.5 h-14 bg-gray-600"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:hidden p-5">
                  {/* <img src={imageQuyTrinh} alt="quy-trinh" className="" /> */}
                  <div className="grid grid-cols-6 gap-4">
                    {stepsMobile.map((step, index) => (
                      <div
                        key={step.key}
                        className="formation_development col-span-6 col-start-1 flex drop-shadow-lg"
                      >
                        <div
                          key={step.key}
                          className={`relative flex ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                          } w-full items-center`}
                        >
                          <div
                            className={`w-full container-recruit-policy py-3 px-4 rounded-full flex items-center justify-between ${
                              index % 2 === 0
                                ? 'border-blue-600 pg-00249C'
                                : 'border-red-600 pg-EC1C24'
                            } `}
                          >
                            {index % 2 !== 0 ? (
                              <>
                                <Typography.Text className="text-white text-5xl pl-2 font-black">
                                  {step.key}
                                </Typography.Text>
                                <div className="w-full flex justify-center">
                                  <p
                                    className="text-white text-center mx-4"
                                    dangerouslySetInnerHTML={{
                                      __html: step.title || '',
                                    }}
                                  />
                                </div>
                                <div className=" text-white -mr-2 flex items-center justify-center w-20 h-16 border-2 border-white rounded-full">
                                  {step.icon}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-white -ml-2 flex items-center justify-center w-20 h-16 border-2 border-white rounded-full">
                                  {step.icon}
                                </div>
                                <div className="w-full flex justify-center">
                                  <p
                                    className="text-white text-center mx-4"
                                    dangerouslySetInnerHTML={{
                                      __html: step.title || '',
                                    }}
                                  />
                                </div>
                                <Typography.Text className="text-white text-5xl font-black">
                                  {step.key}
                                </Typography.Text>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default RecruitProcessPage;
