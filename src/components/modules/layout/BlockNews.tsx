import { Button, Carousel, Flex, Row, Typography } from 'antd';
import { JobDetail } from 'apis/home/HomeAPI';
import { useNavigate } from 'react-router-dom';
import CardJob from './CardJob';
const { Text } = Typography;
export interface IProps {
  title: string;
  data: Array<JobDetail>;
  size?: 'sm' | 'md';
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  border?: string;
  customClass?: string;
  blockDepartmentCode: string;
}

const MAX_CARDS = 6;

export default function BlockNews(props: IProps): JSX.Element {
  const { title, data, blockDepartmentCode } = props;
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/jobs`, { state: { blockDepartmentCode } });
  };

  return (
    <Flex className="w-full justify-center items-center mb-20" vertical>
      <Flex
        className=" h-12 items-center relative rounded-md drop-shadow-lg"
        style={{ background: '#0a66b2', width: '90%' }}
      >
        <div className="absolute left-10 text-lg ">
          <p className="text-left ..." style={{ color: '#ffff' }}>
            VIỆC LÀM&nbsp;
            <Text
              style={{ textTransform: 'uppercase', color: '#ffff' }}
              className="font-semibold text-xl"
            >
              {title}
            </Text>
          </p>
        </div>
        <Button
          type="text"
          className="absolute right-10"
          style={{ color: '#ffff' }}
          onClick={handleViewMore}
        >
          XEM THÊM
        </Button>
      </Flex>

      <div className="items-center drop-shadow-xl" style={{ width: '85%' }}>
        <Carousel>
          <div>
            <Row>
              {data ? (
                <>
                  {data.slice(0, MAX_CARDS).map(function (element) {
                    return (
                      // <CardJob
                      //   key={element.id}
                      //   style={{
                      //     width: '30%',
                      //     margin: 15,
                      //     background: '#FEFEFE',
                      //     height: '100%',
                      //   }}
                      //   data={element}
                      //   size={props.size || 'md'}
                      // />
                      <>blocknews</>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </Row>
          </div>
        </Carousel>
      </div>
    </Flex>
  );
}
