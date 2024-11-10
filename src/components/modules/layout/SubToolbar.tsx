import { ExclamationCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { Button, Card, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface Props {
  title?: string;
  onClickBack?: () => void;
}

export default function SubToolbar(props: Props): React.ReactElement {
  const { title, onClickBack } = props;

  return (
    <Row>
      <Button type="primary" icon={<LeftOutlined />} onClick={onClickBack} />
      <Title
        level={4}
        className="text-base md:text-lg lg:text-xl"
        style={{ opacity: 0.8, marginLeft: 16 }}
      >
        {title}
      </Title>
    </Row>
  );
}
