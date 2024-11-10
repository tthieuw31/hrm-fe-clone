import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
// import { bannerMobileDefault } from "/assets/jpg";
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  data?: any;
  src?: string;
  arrow?: boolean;
  dots?: boolean;
  type?: string;
  activeSlide?: number;
  setActiveSlide?: (index: number) => void;
}

const CarouselPicSlide = (props: Props): JSX.Element => {
  const { data, arrow, dots, type, activeSlide, setActiveSlide } = props;
  const carouselRef = useRef<CarouselRef>(null);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const filteredData = data
    ? data.filter((item: any) => item.typeDevice === 'WEB')
    : [];

  const filteredDataMobile = data
    ? data.filter((item: any) => item.typeDevice === 'MOBILE')
    : [];

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setActiveSlide?.(newIndex);
  };

  // useEffect(() => {
  //   if (activeSlide !== undefined && activeSlide !== null) {
  //     setActiveSlide?.(activeSlide);
  //   }
  // }, [activeSlide]);

  useEffect(() => {
    if (carouselRef.current && typeof activeSlide === 'number') {
      carouselRef.current.goTo(activeSlide, false);
    }
  }, [activeSlide]);

  return (
    <div className="responsive-slider">
      {type ? (
        type === 'slideshow' ? (
          <>
            <div className="hidden lg:block">
              <Carousel
                infinite={true}
                arrows={arrow}
                dots={dots}
                autoplay
                autoplaySpeed={6000}
                beforeChange={handleBeforeChange}
                slickGoTo={activeSlide}
                ref={carouselRef}
                className="drop-shadow-md"
              >
                {filteredData ? (
                  filteredData.map((item: any, index: number) => (
                    <div key={item.id}>
                      <img
                        key={item.id}
                        src={item.thumbnail}
                        alt="slide_image"
                        className="object-contain w-full h-full rounded-xl"
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
            </div>

            <div className="block lg:hidden">
              <Carousel
                infinite={true}
                arrows={arrow}
                dots={dots}
                autoplay
                autoplaySpeed={6000}
                beforeChange={handleBeforeChange}
                slickGoTo={activeSlide}
                ref={carouselRef}
                className="drop-shadow-md"
              >
                {filteredDataMobile ? (
                  filteredDataMobile.map((item: any, index: number) => (
                    <div key={item.id}>
                      <img
                        key={item.id}
                        src={item.thumbnail}
                        alt="slide_image"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
            </div>
          </>
        ) : type === 'carousel' ? (
          <>
            <div className="hidden md:block">
              <Carousel
                arrows={arrow}
                dots={dots}
                infinite={true}
                autoplay
                autoplaySpeed={6000}
                beforeChange={handleBeforeChange}
                slickGoTo={activeSlide}
              >
                {filteredData ? (
                  filteredData.map((item: any) => (
                    <div key={item.id}>
                      <img
                        key={item.id}
                        src={item.thumbnail}
                        alt="Image"
                        className="custom-image-slider-web-home"
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
            </div>

            <div className="slider-mobi md:hidden">
              <Carousel
                arrows={false}
                infinite={false}
                dots={false}
                autoplay
                autoplaySpeed={5000}
                beforeChange={handleBeforeChange}
                slickGoTo={activeSlide}
              >
                {filteredDataMobile ? (
                  filteredDataMobile.map((item: any) => (
                    <img
                      alt="Image"
                      key={item.id}
                      src={item.thumbnail}
                      className="object-contain"
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
              {/* <img alt="banner-home-mobile" src={bannerMobileDefault} /> */}
            </div>
          </>
        ) : type === 'carousel-center' ? (
          <Carousel
            arrows={arrow}
            dots={dots}
            infinite={true}
            // autoplay
            // autoplaySpeed={9000}
            beforeChange={handleBeforeChange}
            slickGoTo={activeSlide}
          >
            {filteredData ? (
              filteredData.map((item: any) => (
                <div key={item.id}>
                  <img
                    key={item.id}
                    src={item.thumbnail}
                    alt="Image"
                    className="custom-image-center"
                  />
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </Carousel>
        ) : null
      ) : null}
    </div>
  );
};

export default CarouselPicSlide;
