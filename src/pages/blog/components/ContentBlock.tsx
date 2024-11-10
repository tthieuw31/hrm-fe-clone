import { CalendarOutlined, RightOutlined } from '@ant-design/icons';
import { Card, Col, Divider, List, Row, Typography } from 'antd';
import { Article, ArticleDetail } from 'apis/home/HomeAPI';
import { NewCalendarOutline } from 'assets/svg';
import ShadowContent from 'components/ShadowContent';
import ShareComponent from 'components/ShareComponent';
import { useNavigate } from 'react-router-dom';
import { formatDateToString } from 'utils/formatDate';

export interface IProps {
  list: Article[];
  mainData: ArticleDetail;
}

const stripHtml = (html: string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || '';
};

export default function ContentBlock(props: IProps): JSX.Element {
  const { list, mainData } = props;
  const navigate = useNavigate();

  const handleItemClick = (url: string) => {
    navigate(`/blogs-news/${url}`);
  };

  return (
    <>
      {mainData && list ? (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: mainData.summary,
            }}
            className="mb-5 content"
          />

          <div className="flex justify-end items-center w-full">
            {/* <div className="flex items-center">
              <NewCalendarOutline
                style={{
                  width: '17px',
                  height: '18px',
                  marginRight: '5px',
                  color: '#979797',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '19px',
                  color: '#979797',
                }}
              >
                {formatDateToString(mainData.datePublish)}
              </p>
            </div> */}
          </div>
          {/* <Divider /> */}
          {/* <div
            dangerouslySetInnerHTML={{
              __html: mainData.description,
            }}
            className="mb-4 content-article"
          /> */}
          <div className="mb-4">
            <ShadowContent htmlContent={mainData.description} />
          </div>

          <Divider />

          <div className="lg:mt-5 mb-4 flex-col lg:flex lg:justify-between items-center">
            <Typography.Text className="font-thin my-1 text-base">
              {<CalendarOutlined />} {'Cập nhật lần cuối:'}{' '}
              {formatDateToString(mainData.updateAt)}
            </Typography.Text>

            <div className="flex items-center pt-5 lg:pt-0">
              <p className="mr-2">Chia sẻ</p>
              <ShareComponent
                title={mainData.titleName}
                description={mainData.summary}
              />
            </div>
          </div>

          <div className="pt-20">
            <Typography.Title level={3} className="md:text-base font-bold">
              BÀI VIẾT KHÁC
            </Typography.Title>
            <Divider />

            <List
              pagination={false}
              split={false}
              dataSource={list}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  onClick={() => handleItemClick(item.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card hoverable size="small" className="w-full">
                    <Row gutter={4} align="middle">
                      <Col
                        xs={8}
                        lg={8}
                        xl={8}
                        className="flex justify-center items-center"
                      >
                        <img
                          className="object-cover max-h-60"
                          alt="Pic"
                          src={item.thumbnail}
                        />
                      </Col>
                      <Col
                        xs={16}
                        lg={16}
                        xl={16}
                        style={{
                          paddingLeft: '10px',
                          paddingRight: 0,
                        }}
                      >
                        <List.Item.Meta
                          title={
                            <Typography.Text
                              ellipsis
                              className="font-semibold text-justify"
                            >
                              {item.titleName}
                            </Typography.Text>
                          }
                          description={
                            <>
                              <Typography.Paragraph
                                ellipsis={{ rows: 4 }}
                                className="font-thin"
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
                                onClick={() => handleItemClick(item.url)}
                              >
                                Xem thêm{<RightOutlined />}
                              </a>
                            </>
                          }
                        />
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
