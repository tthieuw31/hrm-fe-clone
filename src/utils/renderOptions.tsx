import { Select } from 'antd';
import { ReactElement } from 'react';
const { Option } = Select;

type ObjectValueStatus = {
  value: string;
  status: string;
};

export const renderOptions = (data: string[]): ReactElement => (
  <>
    <Option key={`${new Date()}`} value="">
      Tất Cả
    </Option>
    {data.map((value, index) => (
      <Option key={index} value={value}>
        {value}
      </Option>
    ))}
  </>
);

export const renderObjectOptions = (
  data: ObjectValueStatus[]
): ReactElement => (
  <>
    <Option key={`${new Date()}`} value="">
      Tất Cả
    </Option>
    {data.map(({ value, status }, index) => (
      <Option key={index} value={value}>
        {status}
      </Option>
    ))}
  </>
);
