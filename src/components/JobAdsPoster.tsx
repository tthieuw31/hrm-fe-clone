import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Carousel, Image, Spin } from 'antd';
import HomeAPI, { Poster } from 'apis/home/HomeAPI';
import { tuyenDVKH, tuyentdv } from 'assets/jpg';

interface Props {
  imageStyle?: React.CSSProperties;
}

const JobAdsPoster = (props: Props): React.ReactElement => {
  const { imageStyle } = props;
  const navigate = useNavigate();
  const [posterData, setPosterData] = useState<Array<Poster>>();

  const { mutate: getPosters } = useMutation(HomeAPI.getPoster, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setPosterData(data.data);
      }
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });

  useEffect(() => {
    getPosters();
  }, []);

  // if (!posterData) return <Spin size="small" />;

  const staticData = [
    {
      urlImageRecruitment: tuyentdv,
      keyword: 'trinhduocvien',
    },
    {
      urlImageRecruitment: tuyenDVKH,
      keyword: 'dichvukhachhang',
    },
  ];

  return (
    <>
      <Carousel
        autoplay
        infinite
        dots={true}
        autoplaySpeed={4000}
        className="mb-4"
      >
        {posterData
          ? posterData.map((item) => (
              <div key={item.url}>
                <img
                  key={item.url}
                  src={item.urlImageRecruitment}
                  onClick={() =>
                    window.open(`/jobs/detail/${item.url}`, '_blank')
                  }
                  alt="poster"
                  className="custom-image cursor-pointer"
                  style={imageStyle}
                />
              </div>
            ))
          : staticData.map((item) => (
              <div key={item.keyword}>
                <img
                  key={item.keyword}
                  src={item.urlImageRecruitment}
                  onClick={() =>
                    window.open(
                      `/jobs?recruitmentName=${item.keyword}`,
                      '_blank'
                    )
                  }
                  alt="poster"
                  className="custom-image cursor-pointer"
                  style={imageStyle}
                />
              </div>
            ))}
      </Carousel>
    </>
  );
};

export default JobAdsPoster;
