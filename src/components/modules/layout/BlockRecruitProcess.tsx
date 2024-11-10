import {
  AuditOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Flex, Steps, Typography } from 'antd';
import { JobDetail } from 'apis/home/HomeAPI';

const { Text, Title } = Typography;

interface Props {
  data: JobDetail;
}

export default function BlockRecruitProcess(): JSX.Element {
  return (
    <Flex className="w-full justify-center items-center mt-0 mb-5" vertical>
      <Flex
        className="flex-col relative rounded-md drop-shadow-lg p-10"
        style={{ background: '#FFFFFF', width: '100%' }}
      >
        <Title level={3} style={{ color: '#035590' }}>
          QUY TRÌNH TUYỂN DỤNG
        </Title>
        <Steps
          className="my-4"
          current={4}
          items={[
            {
              title: 'Nhận hồ sơ',
              icon: <FileProtectOutlined />,
            },
            {
              title: 'Sàng lọc hồ sơ',
              icon: <SecurityScanOutlined />,
            },
            {
              title: 'Phỏng vấn',
              icon: <UserOutlined />,
            },
            {
              title: 'Nhận kết quả',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Thử việc và nhận việc',
              icon: <AuditOutlined />,
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
