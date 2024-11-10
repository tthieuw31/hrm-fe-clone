import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { MainLayout } from 'components';
import BreadCrumb from 'components/modules/BreadCrumbs';
import AddressBlock from './components/AddressBlock';
import { RightOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import HomeAPI from 'apis/home/HomeAPI';
import NotificationModal, {
  TypeNotification,
} from 'components/NotificationModal';
import { openNotificationWithIcon } from 'utils/notification';
import { useNavigate } from 'react-router-dom';
import CaptchaBox from 'components/CapchaBox';

const ContactPage = (): React.ReactElement => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<TypeNotification>('success');
  const [modalMessage, setModalMessage] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const onFinish = async (values: any) => {
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    // console.log('contactReq:', contactReq);

    if (recaptchaValue) {
      const contactReq = {
        ...values,
        tokenCaptcha: recaptchaValue,
      };

      try {
        const res = await HomeAPI.sendContact(contactReq);
        if (res.status.code === 200) {
          setModalType('success');
          setModalMessage('Gửi thông tin thành công');
          setModalDescription('Chúng tôi sẽ liên hệ với bạn sớm nhất có thể');
        } else {
          setModalType('error');
          setModalMessage('Có lỗi xảy ra');
          setModalDescription(res.status.message || '');
        }
        setModalOpen(true);
      } catch (error) {
        openNotificationWithIcon('error', 'Có lỗi xảy ra' + error);
      }
    }
  };

  return (
    <>
      <MainLayout>
        <div className="bg-white">
          <div className="mx-auto max-w-screen-xl pb-10">
            <div className="2xl:px-9 md:px-16">
              <BreadCrumb />
            </div>

            <div className="px-5 sm:px-8">
              <div className="w-full text-center md:pb-5">
                <Typography.Title
                  level={2}
                  className="font-semibold cl_titeleblack"
                  style={{
                    color: '#46494F',
                  }}
                >
                  LIÊN HỆ
                </Typography.Title>
              </div>

              <section className="section_address pb-10">
                <AddressBlock />
              </section>

              <section className="section_contact_info">
                <div className="h-full w-full">
                  <p
                    style={{
                      color: '#46494F',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '19px',
                      marginBottom: '32px',
                    }}
                  >
                    THÔNG TIN LIÊN HỆ
                  </p>

                  <Form
                    onFinish={onFinish}
                    form={form}
                    layout="vertical"
                    className="font-semibold"
                  >
                    <Row gutter={16}>
                      <Col xs={24} lg={8} xl={8}>
                        <Form.Item
                          name="fullName"
                          label="Họ và tên"
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập họ tên!',
                            },
                          ]}
                        >
                          <Input size="large" className="custom-input w-full" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={8} xl={8}>
                        <Form.Item
                          name="phoneNumber"
                          label="Số điện thoại"
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập số điện thoại!',
                            },
                            {
                              pattern: /^[0-9]{10}$/,
                              message: 'Số điện thoại không hợp lệ!',
                            },
                          ]}
                        >
                          <Input size="large" className="custom-input w-full" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={8} xl={8}>
                        <Form.Item
                          name="email"
                          label="Địa chỉ email"
                          rules={[
                            {
                              type: 'email',
                              message: 'Địa chỉ email không hợp lệ!',
                            },
                            {
                              required: true,
                              message: 'Vui lòng nhập địa chỉ email!',
                            },
                          ]}
                        >
                          <Input size="large" className="custom-input w-full" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} lg={24} xl={24}>
                        <Form.Item name="content" label="Nội dung">
                          <Input.TextArea
                            size="large"
                            className="w-full"
                            rows={7}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    {/* <Form.Item>
                      <CaptchaBox reference={recaptchaRef} />
                    </Form.Item> */}
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="custom-input font-semibold drop-shadow-button"
                        style={{
                          background: '#D62027',
                          minWidth: '150px',
                        }}
                        icon={<RightOutlined />}
                        iconPosition="end"
                      >
                        GỬI
                      </Button>
                    </Form.Item>

                    <CaptchaBox reference={recaptchaRef} />
                  </Form>
                </div>
              </section>
            </div>
          </div>
        </div>

        <NotificationModal
          type={modalType}
          message={modalMessage}
          description={modalDescription}
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            form.resetFields();
            navigate('/');
            // setTimeout(() => {
            //   navigate('/');
            // }, 1000);
          }}
        />
      </MainLayout>
    </>
  );
};

export default ContactPage;
