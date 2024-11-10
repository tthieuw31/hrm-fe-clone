import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from 'components';
import CarouselPicSlide from 'components/CarouselPicSlide';
import SearchBlock from './components/SearchBlock';
import DepartRecruitBlock from './components/DepartRecruitBlock';
import SuggestJobBlock from './components/SuggestJobBlock';
import BlogBlock from './components/BlogBlock';
import ApplyBlock from './components/ApplyBlock';
import HstBlock from './components/HstBlock';
import CandidateApplyAPI from 'apis/home/CandidateApplyAPI';
import HomeAPI, { HomeData } from 'apis/home/HomeAPI';
import { useCategories } from 'apis/categories/CategoriesContext';
import { openNotificationWithIcon } from 'utils/notification';
import { useInView } from 'react-intersection-observer';
import { Spin } from 'antd';
import ApplyNotifyBlock from './components/ApplyNotifyBlock';
import { bannerCenterMobileDefault, bannerMobileDefault } from 'assets/jpg';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { data: categoriesData, isLoading } = useCategories();
  const [homeBlock, setHomeBlock] = useState<HomeData>();
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const { mutate: getInfo } = useMutation(HomeAPI.get, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setHomeBlock(data.data);
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });

  const { mutate: postApply } = useMutation(CandidateApplyAPI.applyCV, {
    onSuccess: (data) => {
      if (data.status.code === 200) {
        openNotificationWithIcon('success', 'Ứng tuyển thành công');
        setIsApplied(true);
      } else {
        openNotificationWithIcon('error', 'Lỗi hệ thống');
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });

  const handleSearch = (values: any) => {
    const searchParams = new URLSearchParams();

    if (values.recruitmentName) {
      searchParams.append('recruitmentName', values.recruitmentName);
    }

    if (values.jobTitlesCode) {
      searchParams.append('jobTitlesCode', values.jobTitlesCode);
    }

    if (values.workingPlace) {
      searchParams.append('workingPlace', values.workingPlace);
    }

    navigate(`/jobs?${searchParams.toString()}`);
  };

  const handleApply = (values: any) => {
    const applyReq = {
      vacancies: values.vacancies || '',
      workingLocation: values.workingLocation || '',
      candidateEmail: values.candidateEmail || '',
      candidateName: values.candidateName || '',
      candidatePhoneNumber: values.candidatePhoneNumber || '',
      urlPortfolio: values.urlPortfolio || '',
      objectName: values.objectName || '',
      bucketName: values.bucketName || '',
    };
    postApply(applyReq);
  };

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });
  const { ref: overlayRef, inView: overlayInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });
  const { ref: applyBlockRef, inView: applyBlockInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {homeBlock ? (
        <MainLayout>
          <section className="section_1">
            <div className="banner-top">
              <CarouselPicSlide
                data={homeBlock?.bannerList}
                type="carousel"
                arrow={true}
              />
              <div className="search-block-container">
                <div className="search-block">
                  <SearchBlock type="home" onSubmit={handleSearch} />
                </div>
              </div>
            </div>
          </section>

          <section className="section_2">
            <DepartRecruitBlock />
          </section>

          <section
            // ref={section3Ref}
            className={`section_3`}
          >
            <SuggestJobBlock
              data={
                homeBlock?.recruitmentList ? homeBlock?.recruitmentList : []
              }
            />
          </section>

          <section className={`section_4 relative bg-white`}>
            <div className="banner w-full relative hidden lg:block min-h-full">
              <div className="relative img-desktop">
                <div className="overflow-clip">
                  <img
                    alt=""
                    ref={imgRef}
                    className={`custom-image-center ${
                      imgInView ? 'slide-in-right' : ''
                    }`}
                    src={homeBlock?.bannerCenterList?.[0].thumbnail}
                  />
                </div>
                <div className="position-top lg:flex hidden mx-auto max1920 px-3 items-center">
                  <div className="flex justify-start items-start w-full 2xl:pl-5 2xl:pr-28 md:px-14">
                    <div
                      ref={overlayRef}
                      className={`overlay ${
                        overlayInView ? 'slide-in-left' : ''
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-top sm:flex sm:items-center hidden mx-auto max-w-screen-xl px-3">
              <div
                ref={applyBlockRef}
                className={`h-full flex justify-start items-center w-1/2 2xl:pl-5 2xl:pr-28 md:px-14 ${
                  applyBlockInView ? 'slide-in-left' : ''
                }`}
              >
                {!isApplied ? (
                  <ApplyBlock onSubmit={handleApply} />
                ) : (
                  <ApplyNotifyBlock />
                )}
              </div>
            </div>
            <div className="lg:hidden items-center max-w-screen-xl px-3.5 pt-8">
              {!isApplied ? (
                <ApplyBlock onSubmit={handleApply} />
              ) : (
                <ApplyNotifyBlock />
              )}
            </div>
            <div className="relative img-mobi lg:hidden">
              {/* <CarouselPicSlide
                data={homeBlock?.bannerCenterList}
                type="carousel"
                dots={false}
                arrow={false}
              /> */}
              <img alt="banner-center" src={bannerCenterMobileDefault} />
            </div>
          </section>

          <div className="pt-10">
            <div className="w-full max-w-screen-xl mx-auto 2xl:px-5 lg:px-12 md:px-16">
              <div className="flex justify-center items-center text-center pb-5">
                <p
                  className="px-1 sm:px-0"
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#46494F',
                  }}
                >
                  HỆ SINH THÁI CHĂM SÓC SỨC KHỎE
                </p>
              </div>

              {/* <CarouselPicSlide data={homeBlock?.bannerSlideShowList} /> */}
              <HstBlock data={homeBlock?.bannerSlideShowList} />
            </div>
          </div>

          <section className={`section_6 bg-white pt-20 px-4 sm:px-0`}>
            <div className="w-full max-w-screen-xl mx-auto 2xl:px-4 lg:px-16 md:px-16">
              <div className="flex justify-center items-center text-center pb-4 ">
                <p
                  className="uppercase"
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#46494F',
                    lineHeight: '42px',
                  }}
                >
                  NƠI LÀM VIỆC LÝ TƯỞNG
                </p>
              </div>

              <BlogBlock data={homeBlock?.articleList} />
            </div>
          </section>
        </MainLayout>
      ) : (
        <Spin fullscreen />
      )}
    </>
  );
};

export default HomePage;
