import { CalendarOutlined, RightOutlined } from '@ant-design/icons';
import { Card, Image, List, Typography } from 'antd';
import { Article } from 'apis/home/HomeAPI';
import { NewCalendarGrayIcon, NewRightOutlined } from 'assets/svg';
import { useNavigate } from 'react-router-dom';
import { formatDateToString } from 'utils/formatDate';

export interface IProps {
  data: Article[];
}

export default function BottomList(props: IProps): JSX.Element {
  const { data } = props;
  const navigate = useNavigate();

  const handleItemClick = (url: string) => {
    navigate(`/blogs-news/${url}`);
  };

  const stripHtml = (html: any) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  return (
    <div>
      {data ? (
        <>
          <div className="hidden lg:block 2xl:px-0">
            <List
              className="min-h-full"
              pagination={{
                pageSize: 4,
                position: 'bottom',
                align: 'center',
              }}
              grid={{ gutter: 16, column: 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    className="mt-3 min-h-full fixed-card"
                    hoverable
                    size="small"
                    onClick={() => handleItemClick(item.url)}
                    cover={
                      <div className="image-container">
                        <Image
                          preview={false}
                          src={item.thumbnail}
                          className="carousel-image"
                        />
                      </div>
                    }
                  >
                    <div className="p-1">
                      <div className="title-container">
                        <Typography.Text className="font-semibold my-1 text-left title-text">
                          {item.titleName}
                        </Typography.Text>
                      </div>
                      <div className="w-full">
                        <Typography.Paragraph
                          ellipsis={{ rows: 3 }}
                          className="font-thin my-1 text-justify"
                        >
                          {stripHtml(item.summary)}
                        </Typography.Paragraph>
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
                            {formatDateToString(item.datePublish)}
                          </p>
                        </div>
                        <a
                          href=""
                          className="flex underline font-light"
                          style={{
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '22px',
                            color: '#28388D',
                          }}
                          onClick={() => handleItemClick(item.id)}
                        >
                          Xem thêm
                          <NewRightOutlined className="ml-1 self-center" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </div>

          <div className="lg:hidden pb-4">
            <List
              className="min-h-full"
              pagination={{
                pageSize: 2,
                position: 'bottom',
                align: 'center',
              }}
              grid={{ gutter: 16, column: 2 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    className="min-h-full fixed-card"
                    hoverable
                    size="small"
                    onClick={() => handleItemClick(item.id)}
                    cover={
                      <div className="image-container">
                        <Image
                          preview={false}
                          src={item.thumbnail}
                          className="fixed-image"
                        />
                      </div>
                    }
                  >
                    <div className="p-1">
                      <div className="title-container">
                        <Typography.Text className="font-semibold my-1 text-left title-text">
                          {item.titleName}
                        </Typography.Text>
                      </div>
                      <div className="w-full">
                        <Typography.Paragraph
                          ellipsis={{ rows: 3 }}
                          className="font-thin my-1 text-justify"
                        >
                          {stripHtml(item.summary)}
                        </Typography.Paragraph>
                        <Typography.Text className="font-thin my-1">
                          {<CalendarOutlined />}{' '}
                          {formatDateToString(item.datePublish)}
                        </Typography.Text>
                        <br />
                        <a
                          href=""
                          className="underline font-light"
                          style={{ color: '#008DFF' }}
                          onClick={() => handleItemClick(item.id)}
                        >
                          Xem thêm{<RightOutlined />}
                        </a>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
