import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Spin,
  Typography,
} from 'antd';
import { useCategories } from 'apis/categories/CategoriesContext';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';
import { IconPackage, MenuDownOutline } from 'assets/svg';
import React from 'react';
import { BlockDepartmentFilter, SalaryFilter } from 'utils/constants';
import { filterOption } from 'utils/selectTagFilterOption';

interface props {
  form: FormInstance;
  onFinish: (values: any) => void;
  initialValues: any;
  bdCode?: string;
}

const { Title } = Typography;

const JobFilterBlock: React.FC<props> = ({
  form,
  onFinish,
  initialValues,
  bdCode,
}) => {
  const { data: categoriesData, isLoading } = useCategories();

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <div className="flex flex-col justify-center lg:w-full">
      <Form
        form={form}
        layout="horizontal"
        // className="font-semibold"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={initialValues}
      >
        <div className="list-filter">
          <div className="mx-auto max-w-screen-xl">
            <div className="2xl:px-9 md:px-16">
              <Row gutter={16} className="pb-2">
                <Col xs={24} lg={8} xl={10}>
                  <Form.Item name="recruitmentName" className="mb-4">
                    <Input
                      size="large"
                      allowClear
                      className="custom-input-2"
                      placeholder="Bạn muốn tìm việc gì"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={6} xl={5}>
                  <Form.Item name="titleCode" className="mb-4">
                    <Select
                      size="large"
                      placeholder="Vị trí tuyển dụng"
                      className="custom-select"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {categoriesData?.listTitles.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={6} xl={5}>
                  <Form.Item name="workingPlace" className="mb-4">
                    <Select
                      size="large"
                      placeholder="Địa điểm làm việc"
                      className="custom-select"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {categoriesData?.listProvinces.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={4} xl={4} className="text-center">
                  <Button
                    className="drop-shadow-button sm:w-full mb-3"
                    size="large"
                    style={{ background: '#D62027' }}
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    // onClick={(e) => e.stopPropagation()}
                  >
                    TÌM VIỆC NGAY
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="list-filter-more px-2 mx-auto">
          <div className="mx-auto max-w-screen-xl">
            <div className="2xl:px-9 md:px-16">
              <Row gutter={[16, 8]}>
                <Col xs={24} lg={4} xl={4} className="items-center pt-1">
                  <Typography.Text className="text-center text-lg">
                    Tùy chọn nâng cao
                  </Typography.Text>
                </Col>
                <Col xs={12} lg={5} xl={5}>
                  <Form.Item name="blockDepartmentCode">
                    <Select
                      size="large"
                      className="custom-select"
                      placeholder="Khối tuyển dụng"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {BlockDepartmentFilter.map((item) => (
                        <Select.Option key={item.value} value={item.value}>
                          {item.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} lg={5} xl={5}>
                  <Form.Item name="workTypeCode">
                    <Select
                      size="large"
                      className="custom-select"
                      placeholder="Chọn hình thức"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {categoriesData?.listTypeOfWorks.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} lg={5} xl={5}>
                  <Form.Item name="jobTitlesCode">
                    <Select
                      size="large"
                      className="custom-select"
                      placeholder="Cấp bậc"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {categoriesData?.listCareerTitles.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} lg={5} xl={5}>
                  <Form.Item name="salary">
                    <Select
                      size="large"
                      placeholder="Mức lương"
                      className="custom-select"
                      allowClear
                      // defaultValue={'ALL'}
                      options={SalaryFilter}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    />
                  </Form.Item>
                </Col>
                {/* <Col xs={12} lg={4} xl={4}>
                  <Form.Item name="experienceCode">
                    <Select
                      size="large"
                      className="custom-select"
                      placeholder="Kinh nghiệm"
                      showSearch
                      allowClear
                      filterOption={filterOption}
                      suffixIcon={<MenuDownOutline className="mr-0" />}
                    >
                      {categoriesData?.listExperience.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col> */}
              </Row>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default JobFilterBlock;
