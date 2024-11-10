import { Card, Col, Image, List, Row, Typography } from 'antd';
import { Article } from 'apis/home/HomeAPI';
import { useNavigate } from 'react-router-dom';

export interface IProps {
  data: Article[];
}

export default function LeftSideList(props: IProps): JSX.Element {
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
    <>
      {data ? (
        <List
          split={false}
          itemLayout="horizontal"
          size="default"
          dataSource={data}
          renderItem={(item: Article) => (
            <List.Item
              key={item.id}
              onClick={() => handleItemClick(item.url)}
              style={{
                cursor: 'pointer',
                marginBottom: '0px',
                paddingBottom: '8px',
                paddingTop: '5px',
              }}
            >
              <Card
                hoverable
                bordered={true}
                size="small"
                className="w-full max-h-64 drop-shadow-sm"
              >
                <Row gutter={2} align="middle" style={{ height: '100%' }}>
                  <Col
                    xs={10}
                    lg={10}
                    xl={10}
                    className="flex justify-center items-center h-full overflow-hidden"
                  >
                    <Image
                      className="blog-block-card-small-img"
                      alt="Pic"
                      src={item.thumbnail}
                      // style={{ maxHeight: '70px' }}
                    />
                  </Col>
                  <Col
                    xs={14}
                    lg={14}
                    xl={14}
                    style={{ paddingLeft: '10px', paddingRight: 0 }}
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
                      // description={
                      //   <>
                      //     <Typography.Paragraph
                      //       ellipsis={{ rows: 2 }}
                      //       className="font-thin"
                      //     >
                      //       {stripHtml(item.summary)}
                      //     </Typography.Paragraph>
                      //   </>
                      // }
                    />
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </>
  );
}
