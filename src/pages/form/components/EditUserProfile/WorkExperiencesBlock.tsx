import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Row,
  Select,
  Skeleton,
  Tooltip,
  Typography,
} from 'antd';
import { useCategories } from 'apis/categories/CategoriesContext';
// import LoadingDot from 'components/modules/layout/LoadingDot';
// import { FormDetailInfo } from 'modules/evaluation/api/FeedbackInterviewApi';
import moment from 'moment';
import React from 'react';

const { Title } = Typography;

interface Props {
  data?: any;
  form?: FormInstance;
  type?: string;
}

const dateFormat = 'DD-MM-YYYY';

function disabledDate(current: any) {
  return current && current > moment().startOf('day');
}

const WorkExperiencesBlock: React.FC<Props> = ({ data, form, type }) => {
  // const { data: categoriesData, isLoading, error } = useCategories();
  const { Option } = Select;

  // if (isLoading) return <Skeleton.Input size="large" active />;
  // if (error) return <p>Error: {error.message}</p>;
  // if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {/* <Title level={4} className="text-base">
        Kinh nghiệm làm việc
      </Title> */}
      {type === 'employee' ? (
        <Form.List name="employeeWorkExperiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key}>
                  <Col span={24}>
                    <Row gutter={8}>
                      <Col xs={23} lg={23} xl={23}>
                        <Divider className="mt-3" />
                      </Col>

                      <Tooltip title="Xóa">
                        <Col
                          xs={1}
                          lg={1}
                          xl={1}
                          style={{ textAlign: 'center' }}
                        >
                          <DeleteOutlined
                            onClick={() => remove(name)}
                            style={{ fontSize: '18px', color: 'red' }}
                          />
                        </Col>
                      </Tooltip>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'companyName']}
                          label="Công ty"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'positionName']}
                          label="Vị trí công việc"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'descriptionJob']}
                          label="Mô tả công việc"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'reference']}
                          label="Người tham chiếu"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'phoneNumber']}
                          label="Số điện thoại"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fromDate']}
                          label="Thời gian từ"
                        >
                          <DatePicker
                            disabledDate={disabledDate}
                            format={dateFormat}
                            className="w-full"
                            placeholder="01-01-2024"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'toDate']}
                          label="Đến"
                        >
                          <DatePicker
                            format={dateFormat}
                            className="w-full"
                            placeholder="01-01-2024"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
              <Form.Item className="flex justify-center">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Thêm
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      ) : type === 'candidate' ? (
        <Form.List name="candidateWorkExperienceList">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key}>
                  <Col span={24}>
                    <Row gutter={8}>
                      <Col xs={23} lg={23} xl={23}>
                        <Divider className="mt-3" />
                      </Col>

                      <Tooltip title="Xóa">
                        <Col
                          xs={1}
                          lg={1}
                          xl={1}
                          style={{ textAlign: 'center' }}
                        >
                          <DeleteOutlined
                            onClick={() => remove(name)}
                            style={{ fontSize: '18px', color: 'red' }}
                          />
                        </Col>
                      </Tooltip>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'companyName']}
                          label="Công ty"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'positionName']}
                          label="Vị trí công việc"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'descriptionJob']}
                          label="Mô tả công việc"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'reference']}
                          label="Người tham chiếu"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'phoneNumber']}
                          label="Số điện thoại"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fromDate']}
                          label="Thời gian từ"
                        >
                          <DatePicker
                            disabledDate={disabledDate}
                            format={dateFormat}
                            className="w-full"
                            placeholder="01-01-2024"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={4}>
                        <Form.Item
                          {...restField}
                          name={[name, 'toDate']}
                          label="Đến"
                        >
                          <DatePicker
                            format={dateFormat}
                            className="w-full"
                            placeholder="01-01-2024"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'salary']}
                          label="Mức lương"
                        >
                          <InputNumber
                            controls={false}
                            formatter={(value) =>
                              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            }
                            parser={(value) =>
                              value?.replace(
                                /\$\s?|(,*)/g,
                                ''
                              ) as unknown as number
                            }
                            className="w-full"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} lg={24} xl={24}>
                        <Form.Item
                          {...restField}
                          name={[name, 'reasonForLeavingJob']}
                          label="Lý do nghỉ việc"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
              <Form.Item className="flex justify-center">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Thêm
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      ) : null}
    </>
  );
};

export default WorkExperiencesBlock;
