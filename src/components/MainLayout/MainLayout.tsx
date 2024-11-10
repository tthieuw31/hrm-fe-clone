import { Layout, Spin } from 'antd';
import React, { ReactNode, memo } from 'react';
import BlockFooter from './BlockFooter';
import FloatBtnGroup from 'components/FloatBtnGroup';
import BlockHeader from './BlockHeader';

const { Content } = Layout;

interface IProps {
  children?: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

const MainLayout = ({ children, isLoading = false }: IProps): JSX.Element => (
  <Spin size="large" spinning={isLoading}>
    <Layout className="min-h-screen bg-white">
      <BlockHeader />
      <Content id="main" className="flex-grow flex justify-center">
        <div className="w-full">{children}</div>
      </Content>
      <BlockFooter />
      <FloatBtnGroup />
    </Layout>
  </Spin>
);

export default memo(MainLayout);
