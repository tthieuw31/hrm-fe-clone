import { RightOutlined } from '@ant-design/icons';
import { Button, Form, FormInstance, Input, Select, Spin } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { useCategories } from 'apis/categories/CategoriesContext';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';
import {
  IconPackage,
  MenuDownOutline,
  NewListIcon,
  NewLocationIcon,
  NewPackageIcon,
  NewSearchIcon,
} from 'assets/svg';
import useScreenWidth from 'hooks/useScreenWidth';
import React, { useMemo } from 'react';
import { filterOption } from 'utils/selectTagFilterOption';

interface Props {
  form?: FormInstance;
  onSubmit: (data: any) => void;
  type?: string;
}

const SearchBlock: React.FC<Props> = ({ form, onSubmit, type }) => {
  const { data: categoriesData, isLoading } = useCategories();
  const screenWidth = useScreenWidth();

  const componentSize: SizeType = screenWidth <= 1706 ? undefined : 'large';

  const onFinish = (values: any) => {
    const formattedData = {
      recruitmentName: values.recruitmentName,
      jobTitlesCode: values.jobTitlesCode,
      workingPlace: values.workingPlace,
    };
    onSubmit(formattedData);
  };

  const listTitles = useMemo(
    () => categoriesData?.listCareerTitles || [],
    [categoriesData]
  );
  const listProvinces = useMemo(
    () => categoriesData?.listProvinces || [],
    [categoriesData]
  );

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <div>
      {type === 'home' ? (
        <div>
          <div className="paragraph">
            <p className="text-white search-block-text">
              Gia nhập với chúng tôi
            </p>
            <p className="text-white search-block-text">
              HỆ SINH THÁI SỨC KHỎE SỐ 1 VIỆT NAM
            </p>
          </div>

          <Form form={form} className="search-block-form" onFinish={onFinish}>
            <Form.Item name="recruitmentName" className="item-input mb-5">
              <Input
                // size={componentSize}
                size="large"
                prefix={<NewSearchIcon className="ml-0.5 mr-1" />}
                suffix={<NewListIcon className="mr-2" />}
                placeholder="Bạn muốn tìm việc gì"
                className="custom-input w-full"
                style={{
                  color: '#2a2a2a ',
                }}
              />
            </Form.Item>
            <div className="custom-select-container w-full lg:max-w-sm">
              <NewPackageIcon
                className="ml-4"
                style={{ width: '18px', height: '17px' }}
              />
              <Form.Item name="jobTitlesCode" className="w-full mb-0">
                <Select
                  // size={componentSize}
                  size="large"
                  placeholder="Cấp bậc"
                  className="pt-0.5"
                  showSearch
                  variant="borderless"
                  filterOption={filterOption}
                  allowClear
                  suffixIcon={<MenuDownOutline className="mr-2" />}
                >
                  {listTitles.map((item) => (
                    <Select.Option key={item.code} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="custom-select-container w-full max-w-sm">
              <NewLocationIcon
                className="ml-4 mr-0"
                style={{ width: '16px', height: '20px' }}
              />
              <Form.Item name="workingPlace" className="w-full mb-0">
                <Select
                  // size={componentSize}
                  size="large"
                  placeholder="Tỉnh / Thành phố"
                  className="pt-0.5"
                  showSearch
                  variant="borderless"
                  filterOption={filterOption}
                  allowClear
                  suffixIcon={<MenuDownOutline className="mr-2" />}
                >
                  {listProvinces.map((item) => (
                    <Select.Option key={item.code} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                // size={componentSize}
                size="large"
                type="primary"
                htmlType="submit"
                className="custom-input drop-shadow-button lg:w-48"
                style={{
                  background: '#D62027',
                  borderRadius: '38px',
                  fontWeight: 'inherit',
                }}
                icon={<RightOutlined />}
                iconPosition="end"
              >
                TÌM VIỆC NGAY
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : type === 'blog' ? (
        <div className="title-top text-justify">
          <Form
            form={form}
            className="w-full flex flex-col justify-center items-center lg:justify-center lg:items-center"
            onFinish={onFinish}
          >
            <Form.Item name="recruitmentName" className="w-full max-w-sm mb-3">
              <Input
                size={componentSize}
                prefix={<NewSearchIcon className="ml-0.5 mr-1" />}
                placeholder="Bạn muốn tìm việc gì"
                className="custom-input"
              />
            </Form.Item>

            <div className="custom-select-container-blog w-full pl-2">
              <NewPackageIcon
                className="ml-4"
                style={{ width: '18px', height: '17px' }}
              />
              <Form.Item name="jobTitlesCode" className="w-full mb-0">
                <Select
                  size={componentSize}
                  placeholder="Vị trí tuyển dụng"
                  className="custom-select"
                  showSearch
                  variant="borderless"
                  filterOption={filterOption}
                  allowClear
                  suffixIcon={<MenuDownOutline className="mr-2" />}
                >
                  {listTitles.map((item) => (
                    <Select.Option key={item.code} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="custom-select-container-blog w-full pl-2">
              <NewLocationIcon
                className="ml-4 mr-0"
                style={{ width: '16px', height: '20px' }}
              />
              <Form.Item name="workingPlace" className="w-full max-w-sm mb-0">
                <Select
                  size={componentSize}
                  placeholder="Tỉnh / Thành phố"
                  className="custom-select"
                  showSearch
                  variant="borderless"
                  filterOption={filterOption}
                  allowClear
                  suffixIcon={<MenuDownOutline className="mr-2" />}
                >
                  {listProvinces.map((item) => (
                    <Select.Option key={item.code} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                size={componentSize}
                type="primary"
                htmlType="submit"
                className="custom-input drop-shadow-button lg:w-48"
                style={{
                  background: '#D62027',
                  borderRadius: '38px',
                  fontWeight: 'inherit',
                }}
                icon={<RightOutlined />}
                iconPosition="end"
              >
                TÌM VIỆC NGAY
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBlock;
