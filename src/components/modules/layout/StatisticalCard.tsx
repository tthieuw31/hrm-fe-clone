import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

interface Props {
  title: string;
  statisticalNumber: string;
  children: React.ReactNode;
}

export default function StatiscicalCard(props: Props): JSX.Element {
  const { title, statisticalNumber, children } = props;

  return (
    <Card className="rounded-xl h-full">
      <div className="flex items-center justify-between">
        <Text type="secondary" className="mb-1">
          {title}
        </Text>
        <ExclamationCircleOutlined />
      </div>
      <Title level={2} className="mb-0">
        {statisticalNumber}
      </Title>
      <div className="flex-1">{children}</div>
    </Card>
  );
}
