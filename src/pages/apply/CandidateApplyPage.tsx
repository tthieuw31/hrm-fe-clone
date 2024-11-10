import { Button, Form, Input, Typography, Upload } from 'antd';
import CandidateApplyAPI from 'apis/home/CandidateApplyAPI';
import { MainLayout } from 'components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import BreadCrumb from 'components/modules/BreadCrumbs';
import { openNotificationWithIcon } from 'utils/notification';
import NotificationModal, {
  TypeNotification,
} from 'components/NotificationModal';
import {
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import HomeAPI, { JobDetail } from 'apis/home/HomeAPI';
import { useMutation } from 'react-query';
import CaptchaBox from 'components/CapchaBox';
import ReCAPTCHA from 'react-google-recaptcha';
import { NewEmailIcon, NewPhoneIcon, NewUserOutline } from 'assets/svg';

const CandidateApplyPage = (): React.ReactElement => {
  const [form] = Form.useForm();
  const location = useLocation();
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const { jobID } = useParams();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<TypeNotification>('success');
  const [modalMessage, setModalMessage] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [jobData, setJobData] = useState<JobDetail>(null!);

  const { mutate: fetchJobDetail } = useMutation(
    (id: any) => HomeAPI.getDetail(id),
    {
      onSuccess: (response) => {
        setJobData(response.data);
      },
      onError: (error) => {
        console.error('Error fetching job details:', error);
      },
    }
  );

  useEffect(() => {
    fetchJobDetail(jobID);
  }, [location]);

  const onFinish = async (values: any) => {
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();
    // console.log('recaptcha value:', recaptchaValue);

    try {
      if (values.userFile && values.userFile.length > 0) {
        const formData = new FormData();
        if (recaptchaValue) {
          formData.append('file', values.userFile[0].originFileObj);
          formData.append('gRecaptchaResponse', recaptchaValue);
        }

        // console.log('Uploading file:', values.userFile[0].originFileObj);
        const fileResponse = await CandidateApplyAPI.postFile(formData);
        // console.log('File upload response:', fileResponse);

        if (fileResponse.data && fileResponse.status.code === 200) {
          const candidateData = {
            recruitmentId: jobData.id,
            candidateName: values.candidateName,
            candidateEmail: values.candidateEmail,
            candidatePhoneNumber: values.candidatePhoneNumber,
            objectName: fileResponse.data.objectName,
            bucketName: fileResponse.data.bucketName,
            urlPortfolio: values.urlPortfolio,
            employeeCode: values.employeeCode || '',
          };
          // console.log('Candidate data:', candidateData);

          const candidateResponse = await CandidateApplyAPI.post(candidateData);
          // console.log('Candidate response:', candidateResponse);
          if (candidateResponse.status.code === 200) {
            // console.log('Application submitted successfully!');
            setModalType('success');
            setModalMessage('Ứng tuyển thành công');
            setModalDescription('Chúng tôi sẽ liên hệ với bạn sớm nhất có thể');
            setIsSubmissionSuccessful(true);
          } else {
            // console.error('Error submitting application:', candidateResponse);
            setModalType('error');
            setModalMessage('Có lỗi xảy ra');
            setModalDescription(candidateResponse.status.message || '');
            setIsSubmissionSuccessful(false);
          }
          setModalOpen(true);
        } else {
          // console.error('Error uploading file:', fileResponse);
          openNotificationWithIcon('error', 'Có lỗi xảy ra khi tải lên file');
        }
      }
    } catch (error) {
      // console.error('Error during application submission:', error);
      openNotificationWithIcon('error', 'Có lỗi xảy ra khi ứng tuyển');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isSubmissionSuccessful) {
      form.resetFields();
      navigate('/');
    }
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="2xl:px-9 md:px-16">
            <BreadCrumb />

            <div className="text-center w-full">
              <p
                style={{
                  color: '#46494F',
                  fontSize: '24px',
                  lineHeight: '26px',
                  fontWeight: 700,
                }}
              >
                BẠN ĐANG ỨNG TUYỂN VỊ TRÍ&nbsp;
              </p>
            </div>
            <div className="text-lg text-center w-full pt-2 pb-5">
              <Typography.Text
                style={{
                  textTransform: 'uppercase',
                  color: '#0a66b2',
                  fontSize: '30px',
                  fontWeight: '700',
                }}
                // className="font-semibold text-3xl"
              >
                {jobData?.recruitmentName}
              </Typography.Text>
            </div>

            <div className="text-center w-full pb-5">
              <p
                style={{
                  color: '#46494F',
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: '700',
                }}
              >
                GỬI CV CỦA BẠN ĐẾN CHÚNG TÔI
              </p>
            </div>

            <Form form={form} onFinish={onFinish}>
              <div className="w-full lg:pb-10">
                <div className="flex flex-col justify-center items-center w-full">
                  <div
                    className="w-full px-4 lg:px-0"
                    style={{ width: '430px' }}
                  >
                    <Form.Item
                      name="candidateName"
                      rules={[
                        { required: true, message: 'Điền họ và tên của bạn!' },
                        { type: 'string', message: 'Họ và tên không hợp lệ!' },
                      ]}
                    >
                      <Input
                        prefix={<NewUserOutline className="ml-1 mr-1" />}
                        size="large"
                        className="custom-input custom-input-1"
                        placeholder="Họ và tên"
                      />
                    </Form.Item>
                    <Form.Item
                      name="candidateEmail"
                      rules={[
                        { required: true, message: 'Điền email của bạn!' },
                        { type: 'email', message: 'Email không hợp lệ!' },
                      ]}
                    >
                      <Input
                        prefix={<NewEmailIcon className="ml-1 mr-1" />}
                        size="large"
                        className="custom-input custom-input-1"
                        placeholder="Email của bạn"
                      />
                    </Form.Item>
                    <Form.Item
                      name="candidatePhoneNumber"
                      rules={[
                        { required: true, message: 'Điền SĐT của bạn!' },
                        {
                          pattern: /^[0-9]{10,15}$/,
                          message: 'Số điện thoại không hợp lệ!',
                        },
                      ]}
                    >
                      <Input
                        prefix={<NewPhoneIcon className="ml-1 mr-1" />}
                        size="large"
                        className="custom-input custom-input-2"
                        placeholder="SĐT của bạn"
                      />
                    </Form.Item>
                    {jobData?.isPortfolio ? (
                      <Form.Item name={'urlPortfolio'}>
                        <Input
                          prefix={
                            <LinkOutlined className="ml-1 mr-1 text-xl" />
                          }
                          size="large"
                          className="custom-input custom-input-1"
                          placeholder="Link portfolio (nếu có)"
                        />
                      </Form.Item>
                    ) : null}
                    {jobData?.isReferral ? (
                      <Form.Item name="employeeCode">
                        <Input
                          prefix={
                            <UsergroupAddOutlined
                              className="ml-1 mr-1 text-xl"
                              // style={{ width: '16px', height: '16px' }}
                            />
                          }
                          size="large"
                          className="custom-input custom-input-1"
                          placeholder="Mã người giới thiệu (nếu có)"
                        />
                      </Form.Item>
                    ) : null}
                    <Form.Item
                      name="userFile"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      className="w-full flex items-center justify-center"
                      rules={[
                        {
                          required: true,
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
                        className="w-full flex flex-col items-center justify-center custom-apply-file"
                        maxCount={1}
                        beforeUpload={() => false} // Ngăn chặn upload tự động
                      >
                        <Button
                          size="large"
                          icon={<UploadOutlined />}
                          style={{
                            borderRadius: '50px',
                          }}
                        >
                          Tải lên CV của bạn
                        </Button>
                      </Upload>
                    </Form.Item>

                    <Form.Item className="form-components-container text-center w-full px-4 pb-5">
                      <Typography.Text style={{ color: '#666' }}>
                        Hỗ trợ các định dạng: .pdf, .doc, .docx | Kích thước tối
                        đa: 10MB
                      </Typography.Text>
                    </Form.Item>

                    {/* <Form.Item className="flex justify-center items-center">
                      <CaptchaBox reference={recaptchaRef} />
                    </Form.Item> */}

                    <Form.Item className="form-components-container pb-10">
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="custom-input font-semibold"
                        style={{
                          background: '#D62027',
                          borderRadius: '50px',
                          minWidth: '100px',
                        }}
                        icon={<RightOutlined />}
                        iconPosition="end"
                      >
                        ỨNG TUYỂN NGAY
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </div>

              <CaptchaBox reference={recaptchaRef} />
            </Form>
          </div>
        </div>
      </div>

      <NotificationModal
        type={modalType}
        message={modalMessage}
        description={modalDescription}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </MainLayout>
  );
};
export default CandidateApplyPage;
