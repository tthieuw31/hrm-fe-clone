import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';
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
  Upload,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { useCategories } from 'apis/categories/CategoriesContext';
import CandidateApplyAPI from 'apis/home/CandidateApplyAPI';
import {
  IconPackage,
  MenuDownOutline,
  NewEmailIcon,
  NewLocationIcon,
  NewPackageIcon,
  NewPhoneIcon,
  NewUserOutline,
} from 'assets/svg';
import useScreenWidth from 'hooks/useScreenWidth';
import React, { useRef } from 'react';
import { filterOption } from 'utils/selectTagFilterOption';
import InputPortfolio from './InputPortfolio';
import CaptchaBox from 'components/CapchaBox';
import ReCAPTCHA from 'react-google-recaptcha';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

interface props {
  form?: FormInstance;
  onSubmit: (data: any) => void;
}

const { Title, Text, Paragraph } = Typography;

const ApplyBlock: React.FC<props> = ({ form, onSubmit }) => {
  const { data: categoriesData, isLoading } = useCategories();
  const screenWidth = useScreenWidth();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const componentSize: SizeType = screenWidth <= 1706 ? undefined : 'large';

  const onFinish = async (values: any) => {
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    const currentURL = window.location.href;
    let companyCode = '';

    if (currentURL.includes('e-plus')) {
      companyCode = 'EPLUS';
    } else if (currentURL.includes('ecopharma')) {
      companyCode = 'ECO';
    }

    try {
      if (values.userFile && values.userFile.length > 0) {
        const formData = new FormData();
        if (recaptchaValue) {
          formData.append('file', values.userFile[0].originFileObj);
          formData.append('gRecaptchaResponse', recaptchaValue);
        }

        const fileResponse = await CandidateApplyAPI.postFile(formData);

        if (fileResponse?.data?.objectName && fileResponse?.data?.bucketName) {
          const formattedData = {
            vacancies: values.vacancies,
            workingLocation: values.workingLocation,
            candidateEmail: values.candidateEmail,
            candidateName: values.candidateName,
            candidatePhoneNumber: values.candidatePhoneNumber,
            urlPortfolio: values.urlPortfolio || '',
            objectName: fileResponse.data.objectName,
            bucketName: fileResponse.data.bucketName,
            companyCode: companyCode,
          };

          console.log('formattedData:', formattedData);
          onSubmit(formattedData);
        } else {
          console.error('File upload response does not contain expected data.');
        }
      } else if (!values.userFile) {
        const formattedData = {
          vacancies: values.vacancies,
          workingLocation: values.workingLocation,
          candidateEmail: values.candidateEmail,
          candidateName: values.candidateName,
          urlPortfolio: values.urlPortfolio || '',
          candidatePhoneNumber: values.candidatePhoneNumber,
          companyCode: companyCode,
        };
        onSubmit(formattedData);
      }
    } catch (error) {
      console.error('An error occurred during file upload:', error);
    }
  };

  if (isLoading) return <Spin size="small" fullscreen />;
  if (!categoriesData) return <p>No data available</p>;

  return (
    <div className="sm:pt-6">
      <div className="w-full">
        <p className="mb-0 text-3xl sm:text-2xl font-bold text-white">
          BẠN ĐÃ SẴN SÀNG
        </p>
        <p className="my-2 text-4xl sm:text-5xl font-bold text-white">
          TRỞ THÀNH ECOER?
        </p>
        <Paragraph
          className="font-normal w-full md:w-11/12"
          style={{
            color: '#FFF',
            fontSize: '15px',
            textAlign: 'justify',
          }}
        >
          Hãy gửi CV đến chúng tôi và để lại thông tin của mình, chúng tôi sẽ
          liên hệ ngay với bạn khi có vị trí phù hợp!
        </Paragraph>
      </div>

      <div className="w-full pb-8">
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            className="font-normal text-base"
          >
            <Row gutter={[8, 0]}>
              <Col xs={24} lg={24} xl={24}>
                <div className="custom-select-container-apply">
                  <NewPackageIcon
                    className="ml-5 mr-1"
                    style={{ width: '18px', height: '17px' }}
                  />
                  <Form.Item name={'vacancies'} className="w-full mb-0">
                    <Select
                      size={componentSize}
                      mode="multiple"
                      maxCount={1}
                      placeholder="Vị trí tuyển dụng"
                      className="-ml-1.5"
                      showSearch
                      variant="borderless"
                      filterOption={filterOption}
                      // allowClear
                      suffixIcon={<MenuDownOutline className="mr-2" />}
                    >
                      {categoriesData?.listTitles.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col xs={24} lg={24} xl={24}>
                <div className="custom-select-container-apply">
                  <NewLocationIcon
                    className="ml-5 mr-1"
                    style={{ width: '16px', height: '20px' }}
                  />
                  <Form.Item name={'workingLocation'} className="w-full mb-0">
                    <Select
                      size={componentSize}
                      mode="multiple"
                      maxCount={1}
                      placeholder="Tỉnh / Thành phố"
                      className="-ml-1.5"
                      showSearch
                      variant="borderless"
                      filterOption={filterOption}
                      // allowClear
                      suffixIcon={<MenuDownOutline className="mr-2" />}
                    >
                      {categoriesData?.listProvinces.map((item) => (
                        <Select.Option key={item.code} value={item.code}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col xs={24} lg={24} xl={24}>
                <Form.Item
                  name={'candidateName'}
                  className="custom-input-container-apply"
                  style={{ marginBottom: '15px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng cung cấp tên của bạn!',
                    },
                  ]}
                >
                  <Input
                    size={componentSize}
                    placeholder="Họ và tên của bạn"
                    className="custom-input"
                    prefix={
                      <NewUserOutline
                        style={{ width: '18px', height: '18px' }}
                        className="ml-2 mr-1"
                      />
                    }
                  />
                </Form.Item>
              </Col>

              <Col xs={24} lg={24} xl={24}>
                <Form.Item
                  name={'candidateEmail'}
                  className="custom-input-container-apply"
                  style={{ marginBottom: '15px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng cung cấp email!',
                    },
                  ]}
                >
                  <Input
                    size={componentSize}
                    prefix={<NewEmailIcon className="ml-2 mr-0.5" />}
                    placeholder="Email của bạn"
                    className="custom-input"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} lg={24} xl={24} className="mb-0 pb-0">
                <Form.Item
                  name={'candidatePhoneNumber'}
                  className="custom-input-container-apply"
                  style={{ marginBottom: '15px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng cung cấp số điện thoại!',
                    },
                  ]}
                >
                  <Input
                    size={componentSize}
                    prefix={<NewPhoneIcon className="ml-2 mr-1" />}
                    placeholder="Số điện thoại liên hệ"
                    className="custom-input"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} lg={11} xl={24} className="mt-0 mb-2 pb-0">
                <Form.Item
                  style={{ marginBottom: '10px' }}
                  className="custom-input-container-apply"
                  name={'urlPortfolio'}
                >
                  {/* <InputPortfolio
                    size="small"
                    type="text"
                    placeholder="Link Portfolio (Không bắt buộc)"
                    variant="borderless"
                    className="input-portfolio"
                  /> */}
                  <Input
                    size={componentSize}
                    prefix={<LinkOutlined className="ml-2 mr-1" />}
                    placeholder="Link Portfolio (Không bắt buộc)"
                    className="custom-input"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} lg={11} xl={12} className="mt-0 mb-2 pb-0">
                <Form.Item
                  style={{ marginBottom: '10px' }}
                  className="m-0"
                  valuePropName="fileList"
                  getValueFromEvent={(event) => {
                    return event?.fileList;
                  }}
                  name={'userFile'}
                  rules={[
                    {
                      required: false,
                      message: '!!! Tải lên file CV của bạn !!!',
                    },
                    {
                      validator(_, fileList) {
                        if (fileList && fileList.length > 0) {
                          const file = fileList[0];
                          const isValidFormat =
                            file.type === 'application/pdf' ||
                            file.type === 'application/msword' ||
                            file.type ===
                              'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                          if (!isValidFormat) {
                            return Promise.reject(
                              'Định dạng file không hợp lệ. Chỉ hỗ trợ .pdf, .doc, .docx'
                            );
                          }
                          if (file.size > 10 * 1024 * 1024) {
                            return Promise.reject(
                              'Kích thước file tối đa là 10MB'
                            );
                          }
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Upload
                    maxCount={1}
                    beforeUpload={() => false}
                    className="custom-file-name"
                  >
                    <a className="text-white underline text-sm font-normal">
                      {'Gửi CV (Không bắt buộc)'}
                    </a>
                  </Upload>
                </Form.Item>
              </Col>

              <Col xs={24} lg={24} xl={10}>
                <Form.Item className="mb-0">
                  <Button
                    size={componentSize}
                    type="primary"
                    htmlType="submit"
                    className="custom-input drop-shadow-button"
                    style={{
                      background: '#D62027',
                      borderRadius: '50px',
                      minWidth: '150px',
                    }}
                    icon={<RightOutlined />}
                    iconPosition="end"
                  >
                    Gửi
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            <CaptchaBox reference={recaptchaRef} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ApplyBlock;
