import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../../assets/css/SlickSlider.module.css';
import {
  ecoPharmaLogo,
  imageJscGroup,
  imageJscGroup2,
  logo,
  tamAnhHosLogo,
  tamriLogo,
  vnvcLogo,
} from 'assets/images';
import '../../../assets/css/style.css';
import CarouselPicSlide from 'components/CarouselPicSlide';
import { TamriLogo } from 'assets/svg';

interface Props {
  data?: any;
}

const HstBlock = (props: Props): JSX.Element => {
  const { data } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveSlide(newIndex),
    prevArrow: <div className={`slick-prev-slide ${styles.slickPrev}`} />,
    nextArrow: <div className={`slick-next-slide ${styles.slickNext}`} />,
  };

  const handleCarouselChange = (newIndex: number) => {
    setActiveSlide(newIndex);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(newIndex);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeSlide);
    }
  }, [activeSlide]);

  return (
    <section className="section_5">
      <div className="container max-w-screen-xl lg:mx-auto lg:px-3.5">
        <div className="section-content relative">
          <div className="absolute inset-0 p-0 m-0 bg-contain block">
            <CarouselPicSlide
              data={data}
              dots={false}
              arrow={false}
              type="slideshow"
              activeSlide={activeSlide}
              setActiveSlide={handleCarouselChange}
            />
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:z-10">
            <div className="lg:col-span-5 lg:col-start-1 flex justify-center items-center">
              <div className="div_gallery hidden lg:grid ">
                <img src={imageJscGroup2} alt="jscgroup" className="h-72" />
              </div>
            </div>
            <div className="padding-top-65percent px-0 col-span-12 col-start-1 padding-hst z-20 sm:px-0 md:col-span-12 md:col-start-1 sm:col-span-8 sm:col-start-1">
              <div className="relative flex justify-center items-center px-8 pb-2 lg:hidden">
                <img src={imageJscGroup2} alt="jscgroup" className="w-4/5" />
              </div>
              <Slider
                {...settings}
                className="slider-hesinhthai drop-shadow-md"
                ref={sliderRef}
                // arrows={false}
              >
                <div
                  onClick={() =>
                    window.open('https://ecopharma.com.vn/', '_blank')
                  }
                  className="slider-hesinhthai md:text-white"
                >
                  <div
                    className="item column-hst pb-10"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="md:flex">
                      <div className="container-logo-cty">
                        <div className="logo-cty flex justify-center items-center w-full h-full md:py-3">
                          <img
                            className="object-contain w-3/4"
                            src={ecoPharmaLogo}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="intro-hst w-full lg:w-4/5">
                        <div className="title-hst text-base font-bold leading-7 pb-4">
                          CÔNG TY CỔ PHẦN DƯỢC PHẨM ECO
                        </div>
                        <div className="content-hst text-sm font-normal text-justify line-clamp-6 sm:line-clamp-none">
                          ECO Pharma hoạt động trong 3 lĩnh vực chính: nhập
                          khẩu, phân phối và bán lẻ các loại dược phẩm chất
                          lượng. Hiện nay, hơn 10.000 sản phẩm của ECO Pharma đã
                          được phân phối cho hàng nghìn nhà thuốc và hàng trăm
                          bệnh viện trên toàn quốc. Chúng tôi là một trong những
                          đơn vị hàng đầu trong lĩnh vực nhập khẩu và phân phối
                          các loại thuốc đặc trị đái tháo đường, tim mạch, ung
                          thư, gan mật,… cùng các dòng sản phẩm chăm sóc sức
                          khỏe ECOGREEN ( Sâm Alipas, Sâm Angela Gold, Jex,
                          Otiv, Hewel, Faz, Wit, Qik và Ritana) với hơn 20.000
                          nhà thuốc là đối tác trực tiếp trải dài khắp 63 tỉnh
                          thành trên toàn quốc.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => window.open('https://vnvc.vn/', '_blank')}
                  className="item md:text-white"
                >
                  <div
                    className="column-hst pb-6"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="md:flex">
                      <div className="container-logo-cty">
                        <div className="logo-cty flex justify-center items-center w-full h-full">
                          <img
                            className="object-contain w-3/4"
                            src={vnvcLogo}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="intro-hst w-full lg:w-4/5">
                        <div className="title-hst text-base font-bold leading-7 pb-4">
                          HỆ THỐNG TRUNG TÂM TIÊM CHỦNG VNVC
                        </div>
                        <div className="content-hst text-sm font-normal text-justify line-clamp-6 sm:line-clamp-none">
                          VNVC là hệ thống trung tâm tiêm chủng cao cấp đầu tiên
                          tại Việt Nam cung cấp đầy đủ vắc xin phòng bệnh với
                          chất lượng cao cấp, là đơn vị đầu tiên có các loại vắc
                          xin thế hệ mới nhất từ các nhà sản xuất hàng đầu thế
                          giới với nhiều dịch vụ tiêm chủng linh hoạt theo yêu
                          cầu. VNVC sở hữu cơ sở vật chất khang trang, hiện đại,
                          phòng tiêm với đầy đủ các trang thiết bị y tế đạt
                          chuẩn cao cấp, luôn cam kết bình ổn giá ngay cả thời
                          điểm khan hiếm.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() =>
                    window.open('https://tamanhhospital.vn/', '_blank')
                  }
                  className="item md:text-white"
                >
                  <div
                    className="column-hst pb-6"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="md:flex">
                      <div className="container-logo-cty">
                        <div className="logo-cty flex justify-center items-center w-full h-full md:py-3">
                          <img
                            className="object-contain w-3/4"
                            src={tamAnhHosLogo}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="intro-hst w-full lg:w-4/5">
                        <div className="title-hst text-base font-bold leading-7 pb-4">
                          HỆ THỐNG BỆNH VIỆN ĐA KHOA TÂM ANH
                        </div>
                        <div className="content-hst text-sm font-normal text-justify line-clamp-6 sm:line-clamp-none">
                          Là địa điểm uy tín khám chữa bệnh hàng đầu Việt Nam
                          với chất lượng chuyên môn cao, phương pháp kỹ thuật
                          điều trị hiện đại và dịch vụ cao cấp 5 sao đẳng cấp
                          quốc tế. Bệnh viện chú trọng xây dựng đội ngũ giỏi
                          chuyên môn từ nhiều lĩnh vực và ghi những dấu ấn vàng
                          trong y văn với hàng trăm ca bệnh khó, bệnh hiếm được
                          điều trị thành công nhờ các chuyên gia, bác sỹ giỏi
                          ứng dụng những kỹ thuật, thiết bị mới đầu tiên tại
                          Việt Nam.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => window.open('https://e-plus.vn/', '_blank')}
                  className="item md:text-white"
                >
                  <div
                    className="column-hst pb-6"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="md:flex">
                      <div className="container-logo-cty">
                        <div className="logo-cty flex justify-center items-center w-full md:py-5">
                          <img
                            className="object-contain w-3/4"
                            src={logo}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="intro-hst w-full lg:w-4/5">
                        <div className="title-hst text-base font-bold leading-7 pb-4">
                          CÔNG TY CỔ PHẦN EPLUS RESEARCH
                        </div>
                        <div className="content-hst text-sm font-normal text-justify line-clamp-6 sm:line-clamp-none">
                          Eplus là đơn vị chuyên cung cấp các dịch vụ và giải
                          pháp tiếp thị kỹ thuật toàn diện từ online đến offline
                          cho lĩnh vực chăm sóc sức khỏe bao gồm: Tư vấn chiến
                          lược truyền thông marketing, social và media, Thiết kế
                          sản xuất - tổ chức sự kiện, Giải pháp công nghệ phần
                          mềm - dữ liệu và Nghiên cứu thị trường - Chăm sóc
                          khách hàng.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => window.open('https://tamri.vn/', '_blank')}
                  style={{ cursor: 'pointer' }}
                  className="item md:text-white"
                >
                  <div
                    className="column-hst pb-6"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="md:flex">
                      <div className="container-logo-cty">
                        <div className="logo-cty flex justify-center items-center w-full md:py-3">
                          {/* <img
                          className="object-contain w-3/4"
                          src={tamriLogo}
                          alt=""
                        /> */}
                          <TamriLogo className="md:h-16 w-3/4" />
                        </div>
                      </div>
                      <div className="intro-hst w-full lg:w-4/5">
                        <div className="title-hst text-base font-bold leading-7 pb-4">
                          VIỆN NGHIÊN CỨU TÂM ANH (TAMRI)
                        </div>
                        <div className="content-hst text-sm font-normal text-justify line-clamp-6 sm:line-clamp-none">
                          Được thành lập vào tháng 5 năm 2023 như là một trụ cột
                          trong hệ thống Tâm Anh, bao gồm Bệnh viện đa khoa Tâm
                          Anh và Đại học Tâm Anh. TAMRI tập hợp các nhà khoa học
                          và bác sĩ trong nước và trên thế giới, thúc đẩy hợp
                          tác cấp quốc gia và quốc tế nhằm nâng cao sức khỏe con
                          người. Qua hợp tác nghiên cứu với các bệnh viện, đại
                          học và các công ty kỹ nghệ, cũng như sự hỗ trợ từ cộng
                          đồng, TAMRI phấn đấu trở thành một tâm điểm xuất sắc
                          trong khu vực.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HstBlock;
