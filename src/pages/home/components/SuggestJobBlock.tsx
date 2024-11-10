import { Card, List, Typography } from 'antd';
import { Recruitment } from 'apis/home/HomeAPI';
import CardJob from 'components/modules/layout/CardJob';
import React, { useEffect, useState } from 'react';

interface Props {
  data?: Recruitment[];
}

const { Title } = Typography;

const SuggestJobBlock: React.FC<Props> = ({ data }) => {
  const [pageSize, setPageSize] = useState<number>(9);

  const updatePageSize = () => {
    setPageSize(window.innerWidth < 768 ? 3 : 9);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => {
      window.removeEventListener('resize', updatePageSize);
    };
  }, []);

  return (
    <div className="py-10 max-w-screen-xl mx-auto px-4 md:px-16 2xl:px-9">
      <div className="md:grid grid-cols-3 items-center w-full mb-4">
        <div className="md:col-start-2 md:col-span-1 flex justify-center">
          <p
            className="text-center"
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#46494F',
            }}
          >
            VIỆC LÀM GỢI Ý
          </p>
        </div>
      </div>

      <List
        split={false}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
        pagination={{
          pageSize: pageSize,
          position: 'bottom',
          align: 'center',
          size: 'small',
          itemRender: (_, type, originalElement) => {
            if (type === 'next') {
              return (
                <div className="flex justify-center w-full">
                  {originalElement}
                  <a
                    onClick={(e) => e.stopPropagation()}
                    href="/jobs"
                    className="font-semibold text-black pl-4 flex items-center"
                  >
                    <p className="mr-1">Xem</p> <p>thêm</p>
                  </a>
                </div>
              );
            }
            return originalElement;
          },
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.id ? (
              <CardJob type="short" data={item} size="sm" />
            ) : (
              <Card />
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default SuggestJobBlock;
