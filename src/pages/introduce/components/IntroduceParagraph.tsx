import { Typography } from 'antd';
import React from 'react';

interface props {
  data?: any;
  company?: string;
}

const { Title, Paragraph, Text } = Typography;

const IntroduceParagraph: React.FC<props> = ({ data, company }) => {
  return (
    <>
      {company && company === 'eco' && (
        <div className="introduce-container flex flex-col justify-center items-center pb-10">
          <div className="md:px-20 max-w-screen-lg text-base px-5 text-center m-auto">
            <p className="title-name pb-5">
              ECO PHARMA - CÔNG TY CỔ PHẦN DƯỢC PHẨM ECO
            </p>
            <div className="inline-flex items-center justify-center pb-8 w-full md:hidden">
              <hr className="w-40 h-0.5 bg-gray-200 border-0 rounded " />
              <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2">
                <div className="w-2.5 h-2.5 border-2 border-inherit border-solid rounded-full"></div>
              </div>
            </div>
            <p className="introduce-paragraph pb-4">
              Chào mừng bạn đến với gia đình ECO Pharma - nơi mà sứ mệnh của
              chúng tôi không chỉ là kinh doanh, mà còn là chăm sóc và bảo vệ
              sức khoẻ cho hàng trăm triệu người dân Việt Nam. Làm việc tại ECO
              Pharma không chỉ là công việc, đó còn là cơ hội để bạn đóng góp
              vào một tổ chức có sứ mệnh cao cả, làm cho cuộc sống của bạn và
              gia đình trở nên có ý nghĩa và ý nghĩa hơn nữa!
            </p>
            <div className="introduce-paragraph">
              ECO Pharma tự hào là 1 trong 3 Công ty dược hàng đầu và là Công ty
              dược phẩm tư nhân lớn nhất Việt Nam với các mảng hoạt động bao
              gồm:
              <ul className="list-disc mt-2">
                <li className="text-justify list-item">
                  Nhập khẩu ủy thác các sản phẩm thuốc, thực phẩm chức năng cung
                  cấp cho hàng ngàn bệnh viện trên toàn quốc;
                </li>
                <li className="text-justify list-item">
                  Hệ thống phân phối các sản phẩm thuốc, thực phẩm chức năng đến
                  hơn 25.000 nhà thuốc;
                </li>
                <li className="text-justify  list-item">
                  Hệ thống bán lẻ với hàng chục nhà thuốc - Đây là hệ thống nhà
                  thuốc đầu tiên tại Việt Nam đạt cùng lúc 3 tiêu chuẩn GSP -
                  GDP - GPP.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {company && company === 'eplus' && (
        <div className="introduce-container">
          <div className="hidden lg:flex flex-col justify-center content-center">
            <Title
              level={3}
              className="text-center"
              style={{ color: '#46494F' }}
            >
              CÔNG TY CỔ PHẦN EPLUS RESEARCH
            </Title>
            <p
              className="text-center md:text-base"
              style={{
                color: '#46494F',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              “Truyền thông tiếp thị và hơn thế nữa!”
            </p>
          </div>
          <div className="flex lg:hidden flex-col justify-center content-center">
            <Title
              level={3}
              className="text-center"
              style={{ color: '#46494F' }}
            >
              CÔNG TY CỔ PHẦN <br /> EPLUS RESEARCH
            </Title>
            <p
              className="text-center md:text-base"
              style={{
                color: '#46494F',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              “Truyền thông tiếp thị và hơn thế nữa!”
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroduceParagraph;
