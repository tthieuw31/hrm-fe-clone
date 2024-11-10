import { Card } from 'antd';
import React from 'react';

interface props {
  svgComponent?: React.ReactNode;
  title?: string;
  onClick?: () => void;
  type: string;
  description?: string;
}

const BlockDepartCard: React.FC<props> = ({
  svgComponent,
  title,
  onClick,
  type,
  description,
}) => {
  return (
    <>
      {type === 'department' ? (
        <Card
          className="custom-card-depart mx-2 mt-16 mb-5 sm:my-0 bg-white h-full"
          onClick={onClick}
          bordered={false}
          hoverable={true}
        >
          <div className="absolute -top-1/2 left-0 right-0 flex items-center justify-center">
            {svgComponent}
          </div>
          <div className="text-center mt-3">
            <p
              className="text-department"
              dangerouslySetInnerHTML={{ __html: title || '' }}
            />
          </div>
        </Card>
      ) : type === 'mission' ? (
        <Card
          className="shadow-04 bg-white h-full m-0 lg:m-0 w-full flex flex-col justify-between rounded-3xl drop-shadow-mission"
          style={{ minHeight: '339px', minWidth: '370px' }}
          onClick={onClick}
          bordered={false}
          hoverable={true}
        >
          <div className="flex items-center justify-center p-2">
            {svgComponent}
          </div>
          <div className="flex justify-center items-center mt-2 h-12">
            <p
              style={{
                textAlign: 'center',
                color: '#28388D',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 700,
              }}
              dangerouslySetInnerHTML={{ __html: title || '' }}
            />
          </div>
          <div className="text-justify items-center mt-2 mx-3 lg:mx-4">
            <p
              style={{
                textAlign: 'justify',
                color: '#46494F',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400,
              }}
            >
              {description}
            </p>
          </div>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default BlockDepartCard;
