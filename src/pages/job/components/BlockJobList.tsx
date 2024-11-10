import { List } from 'antd';
import { Recruitment } from 'apis/home/HomeAPI';
import { useNavigate } from 'react-router-dom';
import CardJob from '../../../components/modules/layout/CardJob';

export interface IProps {
  // title: string;
  data: Recruitment[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  onChangePage: (page: number) => void;
  size?: 'sm' | 'md';
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  border?: string;
  customClass?: string;
}

export default function BlockJobList(props: IProps): JSX.Element {
  const { data } = props;
  const navigate = useNavigate();

  const handleItemClick = (id: any) => {
    navigate(`/jobs/detail/${id}`);
  };

  return (
    <div>
      {data ? (
        <List
          split={false}
          itemLayout="vertical"
          size="large"
          dataSource={data}
          pagination={{
            position: 'bottom',
            align: 'center',
            current: props.currentPage,
            pageSize: props.pageSize,
            total: props.totalElements,
            onChange: (page) => props.onChangePage(page),
          }}
          renderItem={(item: Recruitment) => (
            <List.Item
              key={item.id}
              onClick={() => handleItemClick(item.url)}
              style={{
                cursor: 'pointer',
                paddingBottom: '20px',
                paddingTop: '0px',
              }}
            >
              <CardJob data={item} size="md" type="full" />
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
