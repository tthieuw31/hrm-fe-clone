import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const ApplyNotifyBlock = () => {
  return (
    <div className="sm:pt-6 h-full">
      <div className="w-full">
        <p className="mb-0 text-3xl sm:text-2xl font-bold text-white">
          BẠN ĐÃ SẴN SÀNG
        </p>
        <p className="my-2 text-4xl sm:text-5xl font-bold text-white">
          TRỞ THÀNH ECOER?
        </p>
        <Paragraph
          className="font-normal w-full md:w-11/12"
          style={{
            color: '#FFF',
            fontSize: '15px',
            textAlign: 'justify',
          }}
        >
          Hãy gửi CV đến chúng tôi và để lại thông tin của mình, chúng tôi sẽ
          liên hệ ngay với bạn khi có vị trí phù hợp!
        </Paragraph>
      </div>

      <div className="flex flex-col justify-center text-center h-2/3 pb-10 pr-7">
        <p
          style={{
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 400,
          }}
        >
          Cảm ơn bạn đã đăng ký ứng tuyển. Bộ phận Nhân sự của chúng tôi sẽ liên
          hệ bạn trong thời gian sớm nhất nếu CV của bạn phù hợp với vị trí ứng
          tuyển. <br /> Nếu có vấn đề thắc mắc bạn có thể liên hệ:
        </p>
        <p
          style={{
            color: '#FFF',
            fontSize: '18px',
            marginTop: '10px',
          }}
        >
          Số điện thoại: (028) 2200 5968
        </p>
        <p
          style={{
            color: '#FFF',
            fontSize: '18px',
          }}
        >
          Email: tuyendung@ecopharma.com.vn
        </p>
      </div>
    </div>
  );
};

export default ApplyNotifyBlock;
