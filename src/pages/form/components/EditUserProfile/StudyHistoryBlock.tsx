import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Tooltip,
  Typography,
} from 'antd';
import { CategoriesData } from 'apis/categories/CategoriesApi';
import { useCategories } from 'apis/categories/CategoriesContext';
// import LoadingDot from 'components/modules/layout/LoadingDot';
import moment from 'moment';
import UpdateProfileApi from 'pages/form/api/UpdateProfileApi';
import React, { useEffect, useRef, useState } from 'react';

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

const StudyHistoryBlock: React.FC<Props> = ({ data, form, type }) => {
  // const { data: categoriesData, isLoading, error } = useCategories();
  const isMounted = useRef(false);
  const { Option } = Select;

  const [categoriesData, setCategoriesData] = useState<CategoriesData>();

  useEffect(() => {
    isMounted.current = true;
    const fetchCategories = async () => {
      try {
        const response = await UpdateProfileApi.getCategories();
        if (isMounted.current) {
          console.log('categories:', response.data);
          setCategoriesData(response.data);
        }
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };
    fetchCategories();
    return () => {
      isMounted.current = false;
    };
  }, []);

  // if (isLoading) return <LoadingDot />;
  // if (error) return <p>Error: {error.message}</p>;
  // if (!categoriesData) return <p>No data available</p>;

  return (
    <>
      {/* <Title level={4} className="text-base">
        Quá trình học tập
      </Title> */}
      {type === 'employee' ? (
        <Form.List name="employeeStudyProcess">
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
                          name={[name, 'trainingPlace']}
                          label="Nơi đào tạo"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'specialized']}
                          label="Chuyên ngành"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'educationLevelCode']}
                          label="Trình độ"
                        >
                          <Select showSearch>
                            {categoriesData?.listEducationLevel.map((item) => (
                              <Option key={item.code} value={item.code}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'formOfTrainingCode']}
                          label="Hình thức đào tạo"
                        >
                          <Select showSearch>
                            {categoriesData?.listTrainingForm.map((item) => (
                              <Option key={item.code} value={item.code}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
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
                      <Col xs={24} lg={12} xl={8}>
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
        <Form.List name="candidateStudyProcesses">
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
                          name={[name, 'trainingPlace']}
                          label="Nơi đào tạo"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'specialized']}
                          label="Chuyên ngành"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'educationLevelCode']}
                          label="Trình độ"
                        >
                          <Select showSearch>
                            {categoriesData?.listEducationLevel.map((item) => (
                              <Option key={item.code} value={item.code}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} lg={12} xl={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'formOfTrainingCode']}
                          label="Hình thức đào tạo"
                        >
                          <Select showSearch>
                            {categoriesData?.listTrainingForm.map((item) => (
                              <Option key={item.code} value={item.code}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={12} xl={8}>
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
                      <Col xs={24} lg={12} xl={8}>
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
      ) : null}
    </>
  );
};

export default StudyHistoryBlock;
