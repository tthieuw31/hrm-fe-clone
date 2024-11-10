import {
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Flex, Form, Input, Modal, Typography, Upload } from 'antd';
import CandidateApplyAPI, {
  CandidateApplyRequest,
} from 'apis/home/CandidateApplyAPI';
import HomeAPI, { JobDetail } from 'apis/home/HomeAPI';
import NotificationModal, {
  TypeNotification,
} from 'components/NotificationModal';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { openNotificationWithIcon } from 'utils/notification';

const { Text } = Typography;

export interface IProps {
  title?: string;
  jobId?: number | undefined;
  size?: 'sm' | 'md';
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  border?: string;
  customClass?: string;
}

export default function BlockApplication(props: IProps): JSX.Element {
  const [form] = Form.useForm();
  const { title } = props;
  const { jobID } = useParams();
  const navigate = useNavigate();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [jobData, setJobData] = useState<JobDetail>(null!);
  const [jobId, setJobId] = useState<number>(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<TypeNotification>('success');
  const [modalMessage, setModalMessage] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  useEffect(() => {
    if (jobID) {
      const parts = jobID.split('-');
      const id = parts[0];
      const name = decodeURIComponent(parts.slice(1).join('-'));
      // setJobTitle(name);
      setJobId(Number(id));
      // console.log('jobId:', id);
    }
  }, [jobID]);

  const { mutate: fetchJobDetail } = useMutation(
    (id: number) => HomeAPI.getDetail(id),
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
    if (jobID) {
      fetchJobDetail(Number(jobId));
    }
  }, [jobId, fetchJobDetail]);

  const onFinish = async (values: any) => {
    const recruitmentId = Number(jobId);
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (recaptchaValue) {
      try {
        if (values.userFile && values.userFile.length > 0) {
          const formData = new FormData();
          formData.append('file', values.userFile[0].originFileObj);
          formData.append('tokenCapt', recaptchaValue);
          const fileResponse = await CandidateApplyAPI.postFile(formData);
          // console.log('file upload response', fileResponse);

          if (fileResponse.data) {
            const candidateData = {
              recruitmentId: recruitmentId,
              candidateName: values.candidateName,
              candidateEmail: values.candidateEmail,
              candidatePhoneNumber: values.candidatePhoneNumber,
              objectName: fileResponse.data.objectName,
              bucketName: fileResponse.data.bucketName,
              employeeCode: values.employeeCode,
            };
            console.log('candidate data:', candidateData);

            const candidateResponse = await CandidateApplyAPI.post(
              candidateData
            );
            if (candidateResponse.status.code === 200) {
              setModalType('success');
              setModalMessage('Ứng tuyển thành công');
              setModalDescription(
                'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể'
              );
            } else {
              setModalType('error');
              setModalMessage('Có lỗi xảy ra');
              setModalDescription(candidateResponse.status.message || '');
            }
            setModalOpen(true);
          }
        }
      } catch (error) {
        openNotificationWithIcon('error', 'Có lỗi xảy ra khi ứng tuyển');
      }
    }
  };

  const fileNameValidator = (_: any, fileList: any) => {
    const MAX_LENGTH = 150; // Số ký tự tối đa cho tên file

    if (fileList && fileList.length > 0) {
      const fileName = fileList[0].name;
      if (fileName.length > MAX_LENGTH) {
        return Promise.reject(
          `Tên file không được vượt quá ${MAX_LENGTH} ký tự.`
        );
      }
    }
    return Promise.resolve();
  };

  return (
    <div className="w-full min-h-screen">
      <div className=" text-center w-full">
        <Text
          style={{
            color: '#46494F',
            fontSize: '24px',
            lineHeight: '26px',
            fontWeight: 700,
          }}
        >
          BẠN ĐANG ỨNG TUYỂN VỊ TRÍ&nbsp;
        </Text>
      </div>
      <div className="text-lg text-center w-full">
        <Text
          style={{ textTransform: 'uppercase', color: '#0a66b2' }}
          className="font-semibold text-3xl"
        >
          {title}
        </Text>
      </div>

      <div className=" text-center w-full py-4">
        <Text className="text-xl text-left" style={{ color: '#000' }}>
          GỬI CV CỦA BẠN ĐẾN CHÚNG TÔI
        </Text>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-1/3">
          <Form onFinish={onFinish} form={form}>
            <Form.Item
              name={'candidateName'}
              rules={[{ required: true, message: 'Điền họ và tên của bạn!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                size="large"
                className="custom-input"
                placeholder="Họ và tên"
              />
            </Form.Item>
            <Form.Item
              name={'candidateEmail'}
              rules={[{ required: true, message: 'Điền email của bạn!' }]}
            >
              <Input
                prefix={<MailOutlined />}
                size="large"
                className="custom-input"
                placeholder="Email của bạn"
              />
            </Form.Item>
            <Form.Item
              name={'candidatePhoneNumber'}
              rules={[{ required: true, message: 'Điền SĐT của bạn!' }]}
            >
              <Input
                prefix={<PhoneOutlined />}
                size="large"
                className="custom-input"
                placeholder="SĐT của bạn"
              />
            </Form.Item>
            {/* {jobData?.isReferral ? ( */}
            <Form.Item name={'portfolio'}>
              <Input
                prefix={<UsergroupAddOutlined />}
                size="large"
                className="custom-input"
                placeholder="Link portfolio (nếu có)"
              />
            </Form.Item>
            {/* ) : (
              <></>
            )} */}
            {jobData?.isReferral ? (
              <Form.Item name={'employeeCode'}>
                <Input
                  prefix={<UsergroupAddOutlined />}
                  size="large"
                  className="custom-input"
                  placeholder="Mã người giới thiệu (nếu có)"
                />
              </Form.Item>
            ) : (
              <></>
            )}
            <Form.Item
              valuePropName="fileList"
              getValueFromEvent={(event) => {
                return event?.fileList;
              }}
              className="w-full flex items-center justify-center"
              name={'userFile'}
              rules={[
                {
                  required: true,
                  message: '!!! Tải lên file CV của bạn !!!',
                },
                // { validator: fileNameValidator },
                {
                  validator(_, fileList) {
                    return new Promise((resolve, reject) => {
                      if (fileList) {
                        if (fileList[0].size > 10 * 1024 * 1024) {
                          reject('Kích thước file tối đa là 10MB');
                        }
                      } else {
                        resolve('Success');
                      }
                    });
                  },
                },
              ]}
            >
              <Upload
                className="w-full flex flex-col items-center justify-center"
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

            <Form.Item className="form-components-container">
              <Text style={{ color: '#666' }}>
                Hỗ trợ các định dạng: .pdf, .doc, .docx | Kích thước tối đa:
                10MB
              </Text>
            </Form.Item>

            <Form.Item className="form-components-container">
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
          </Form>
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
        }}
      />
    </div>
  );
}
