import { CalendarOutlined, RightOutlined } from '@ant-design/icons';
import { Card, Col, Image, List, Row, Typography } from 'antd';
import { Article } from 'apis/home/HomeAPI';
import {
  NewCalendarGrayIcon,
  NewCalendarOutline,
  NewRightOutlined,
} from 'assets/svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateToString } from 'utils/formatDate';

interface Props {
  data?: Article[];
}

const { Paragraph, Text } = Typography;

const stripHtml = (html: string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || '';
};

const BlogBlock: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const firstItem = data[0];
  const listItems = data.slice(1, 4);

  return (
    <div className="mx-auto pb-10 2xl:px-4">
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={12} className="pt-3">
          <Card
            className="drop-shadow-sm"
            hoverable
            size="small"
            bordered={false}
            onClick={() => navigate(`/blogs-news/${firstItem.url}`)}
            cover={
              <Image
                preview={false}
                src={firstItem.thumbnail}
                className="blog-block-card-img"
              />
            }
          >
            <Text className="font-semibold my-1 text-justify">
              {firstItem.titleName}
            </Text>
            <Paragraph className="font-thin my-1">
              {stripHtml(firstItem.summary)}
            </Paragraph>
            <div className="flex font-thin mt-1 mb-2">
              <NewCalendarGrayIcon
                style={{
                  height: '17px',
                  width: '18px',
                  marginRight: '5px',
                }}
              />
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: 'rgba(151, 151, 151, 1)',
                }}
              >
                {formatDateToString(firstItem.datePublish)}
              </p>
            </div>
            <a
              href={`/blogs-news/${firstItem.url}`}
              className="flex underline font-light"
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '22px',
                color: '#28388D',
              }}
            >
              Xem thêm <NewRightOutlined className="ml-1 self-center" />
            </a>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <List
            split={false}
            itemLayout="horizontal"
            size="default"
            dataSource={listItems}
            renderItem={(item: Article) => (
              <List.Item key={item.id} style={{ cursor: 'pointer' }}>
                <Card
                  onClick={() => navigate(`/blogs-news/${item.url}`)}
                  hoverable
                  size="small"
                  className="w-full h-full drop-shadow-sm"
                >
                  <Row gutter={4} align="middle" style={{ height: '100%' }}>
                    <Col xs={8} className="flex justify-center items-center">
                      <img
                        className="object-cover"
                        alt="Pic"
                        src={item.thumbnail}
                      />
                    </Col>
                    <Col
                      xs={16}
                      style={{ paddingLeft: '10px', paddingRight: 0 }}
                    >
                      <List.Item.Meta
                        title={
                          <Text ellipsis className="font-semibold text-justify">
                            {item.titleName}
                          </Text>
                        }
                        description={
                          <>
                            <Paragraph
                              ellipsis={{ rows: 2 }}
                              className="font-thin"
                            >
                              {stripHtml(item.summary)}
                            </Paragraph>
                            <div className="flex font-thin my-1">
                              <NewCalendarGrayIcon
                                style={{
                                  height: '17px',
                                  width: '18px',
                                  marginRight: '5px',
                                }}
                              />
                              <p
                                style={{
                                  fontSize: '14px',
                                  fontWeight: 400,
                                  lineHeight: '20px',
                                  color: 'rgba(151, 151, 151, 1)',
                                }}
                              >
                                {formatDateToString(item.datePublish)}
                              </p>
                            </div>
                          </>
                        }
                      />
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BlogBlock;
