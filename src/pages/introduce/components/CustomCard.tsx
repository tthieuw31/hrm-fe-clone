import React from 'react';
import { Card, Typography, List, Divider } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
// import './CardComponent.css';

const { Title } = Typography;

interface props {
  svgComponent?: React.ReactNode;
  title?: string;
  onClick?: () => void;
  type?: string;
  description?: Array<string>;
}

const CustomCard: React.FC<props> = ({
  svgComponent,
  title,
  onClick,
  description,
  type,
}) => {
  return (
    <>
      {type === 'chinhsach' ? (
        <Card
          className="custom-card-policy rounded-2xl bg-white m-2 md:m-0 drop-shadow-lg"
          onClick={onClick}
          bordered={false}
          hoverable={true}
          title={
            <div className="flex justify-center items-center">
              {svgComponent ? (
                <>
                  {svgComponent}
                  <div className="mx-4 border-l-2 border-dashed border-gray-400 h-8"></div>
                </>
              ) : null}
              <p className="text-base font-bold">{title}</p>
            </div>
          }
        >
          <div className="text-justify mt-2">
            <ul>
              {/* <p className="font-normal">{description}</p> */}
              {description ? (
                description.map((desc, index) => (
                  <li key={index} className="font-normal">
                    {desc}
                    {index !== description.length - 1 && (
                      <Divider
                        className="mt-1 mb-0"
                        style={{
                          // height: '1px',
                          color: '#46494F',
                        }}
                      />
                    )}
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </Card>
      ) : type === 'eplus' ? (
        <Card
          className="custom-card custom-card-bg custom-card-shadow lg:m-2 m-0"
          onClick={onClick}
          bordered={false}
          hoverable={true}
        >
          {svgComponent ? (
            <div className="absolute -top-24 lg:-top-32 right-0 left-0 flex justify-center text-center">
              {svgComponent}
            </div>
          ) : null}
          <div className="mt-12">
            {title ? (
              <div className="title-container flex justify-center">
                <p
                  dangerouslySetInnerHTML={{ __html: title || '' }}
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '22px',
                    textAlign: 'center',
                    color: '#D5001C',
                  }}
                />
              </div>
            ) : null}
            <div className="pt-2">
              <ul>
                {description
                  ? description.map((desc, index) => (
                      <li
                        key={index}
                        // className="font-normal text-base text-left text-blue-800"
                        style={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '22px',
                          // textAlign: 'center',
                          color: '#072996',
                        }}
                      >
                        {<p dangerouslySetInnerHTML={{ __html: desc || '' }} />}
                        {/* <Divider className="mt-1 mb-0 bg-white h-0.5" /> */}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default CustomCard;
