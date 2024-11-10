import React from 'react';
import { ConfigProvider, Input } from 'antd';

const InputPortfolio = (props: any) => (
  <ConfigProvider
    theme={{
      token: {
        colorTextPlaceholder: '#ffffffd3',
        colorText: '#ffffffd3',
      },
    }}
  >
    <Input {...props} />
  </ConfigProvider>
);

export default InputPortfolio;
