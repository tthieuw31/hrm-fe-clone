import { Button, Form, Input, Modal, Spin, Typography } from 'antd';
import { MainLayout } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import BreadCrumb from 'components/modules/BreadCrumbs';
import { RightOutlined } from '@ant-design/icons';
import HomeAPI, {
  LookupApplyRes,
  LookupApplyResponse,
} from 'apis/home/HomeAPI';
import { ColumnType } from 'antd/es/table';
import { Table } from 'antd/lib';
import { openNotificationWithIcon } from 'utils/notification';
import { ApplyStatus } from 'utils/constants';
import CaptchaBox from 'components/CapchaBox';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultSearchPage = (): React.ReactElement => {
  const [form] = Form.useForm();
  const [otpForm] = Form.useForm();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [resultList, setResultList] = useState<LookupApplyRes[]>([]);

  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(240);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);

  const queryParams = new URLSearchParams(location.search);
  const emailOrPhoneFromUrl = queryParams.get('emailOrPhone') || '';

  const { mutate: getResultList } = useMutation(HomeAPI.lookupApplyResult, {
    onSuccess: (data) => {
      setIsFetched(true);
      setIsError(false);
      if (data != null && data.status.code === 200) {
        openNotificationWithIcon('success', 'Mã OTP hợp lệ');
        setIsModalVisible(false);
        setResultList(data.data);
      } else {
        openNotificationWithIcon('error', 'Mã OTP không hợp lệ');
      }
    },
    onError: (error: any) => {
      setIsFetched(true);
      setIsError(true);
      openNotificationWithIcon('error', 'Lỗi hệ thống');
    },
  });

  const { mutate: getOTPByEmail } = useMutation(HomeAPI.getOTPByEmail, {
    onSuccess: (data) => {
      setIsLoadingOTP(false);
      if (data.status.code === 200) {
        // openNotificationWithIcon(
        //   'success',
        //   'Mã OTP đã được gửi tới Email của bạn'
        // );
        setIsOTPSent(true);
        setRemainingTime(240);
        setIsModalVisible(true);
      } else {
        openNotificationWithIcon('error', 'Lỗi hệ thống');
      }
    },
    onError: (error: any) => {
      setIsLoadingOTP(false);
      console.log('error:', error);
    },
  });

  const onSendOTP = async (values: any) => {
    setIsLoadingOTP(true);
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();
    if (recaptchaValue) {
      const searchReq = {
        emailOrPhone: values.emailOrPhone,
        tokenCapt: recaptchaValue,
      };
      getOTPByEmail(searchReq);
    }
  };

  const onSubmitOTP = async (otpCode: string) => {
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    const searchReq = {
      tokenCapt: recaptchaValue,
      emailOrPhone: form.getFieldValue('emailOrPhone'),
      otpCode,
    };
    getResultList(searchReq);
  };

  const handleResendOTP = () => {
    onSendOTP({ emailOrPhone: form.getFieldValue('emailOrPhone') });
    setRemainingTime(240);
    setTimerExpired(false);
  };

  useEffect(() => {
    if (isOTPSent && remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (remainingTime === 0) {
      setTimerExpired(true);
    }
  }, [isOTPSent, remainingTime]);

  useEffect(() => {
    if (emailOrPhoneFromUrl) {
      form.setFieldsValue({ emailOrPhone: emailOrPhoneFromUrl });
    }
  }, [emailOrPhoneFromUrl]);

  const validateInput = (_: any, value: any) => {
    if (!value) {
      return Promise.reject('Điền thông tin tra cứu!');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(value)) {
      return Promise.resolve();
    }

    return Promise.reject('Email không hợp lệ!');
  };

  const getStatusLabel = (status: string) => {
    const statusObj = ApplyStatus.find((item) => item.value === status);
    return statusObj ? statusObj.label : status;
  };

  const columns: ColumnType<LookupApplyRes>[] = [
    {
      title: 'Họ và tên',
      dataIndex: 'candidateName',
      key: 'candidateName',
      width: 200,
    },
    {
      title: 'Email',
      dataIndex: 'candidateEmail',
      key: 'candidateEmail',
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'candidatePhoneNumber',
      key: 'candidatePhoneNumber',
      width: 150,
    },
    {
      title: 'Vị trí ứng tuyển',
      dataIndex: ['result', 'recruitmentName'],
      key: 'recruitmentName',
      render: (text, record) => (
        <>
          {record.result.map((res) => (
            <div key={res.id}>{res.recruitmentName}</div>
          ))}
        </>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: ['result', 'applicantStatusCode'],
      key: 'applicantStatusCode',
      render: (text, record) => (
        <>
          {record.result.map((res) => (
            <div key={res.id}>{getStatusLabel(res.applicantStatusCode)}</div>
          ))}
        </>
      ),
    },
    {
      title: 'Ngày ứng tuyển',
      dataIndex: ['result', 'applicantDate'],
      key: 'applicantDate',
      render: (text, record) => (
        <>
          {record.result.map((res) => (
            <div key={res.id}>
              {new Date(res.applicantDate).toLocaleString()}
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-xl">
        <div className="2xl:px-9 md:px-16 pb-20">
          <div className="result-apply h-full flex flex-col">
            <BreadCrumb />
            <div className="block lg:hidden mx-auto text-center lg:w-full">
              <p className="title">
                TRA CỨU KẾT QUẢ <br /> ỨNG TUYỂN
              </p>
            </div>

            <div className="hidden lg:block mx-auto text-center lg:w-full">
              <p className="title">TRA CỨU KẾT QUẢ ỨNG TUYỂN</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <Typography.Text
                className="text-center text-base p-4 mb-0 font-semibold"
                style={{ color: '#46494F' }}
              >
                Anh/Chị vui lòng nhập thông tin sau đây
              </Typography.Text>
              <Form
                form={form}
                className="flex flex-col items-center font-semibold lg:w-full pb-20"
                onFinish={onSendOTP}
              >
                <Form.Item
                  name={'emailOrPhone'}
                  rules={[
                    {
                      validator: validateInput,
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="*Email của bạn"
                    className="custom-input-1"
                  />
                </Form.Item>

                <Form.Item className="w-full flex items-center justify-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="custom-input text-center font-semibold drop-shadow-button"
                    style={{
                      background: '#D62027',
                      minWidth: '187px',
                      height: '43px',
                    }}
                    icon={<RightOutlined />}
                    iconPosition="end"
                    loading={isLoadingOTP}
                  >
                    <p className="self-center">NHẬN MÃ OTP</p>
                  </Button>
                </Form.Item>

                <CaptchaBox reference={recaptchaRef} />
              </Form>
            </div>

            {isFetched && !isError && (
              <div className="w-full flex flex-col justify-center items-center pb-10 px-0">
                {resultList.length > 0 ? (
                  <Table
                    pagination={false}
                    bordered={true}
                    columns={columns}
                    dataSource={resultList}
                    rowKey="id"
                    className="w-full"
                    scroll={{ x: 768 }}
                  />
                ) : (
                  <p>Không có dữ liệu của bạn</p>
                )}
              </div>
            )}

            <div className="bg-white h-full"></div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={otpForm}
          onFinish={(values) => onSubmitOTP(values.otpCode)}
          className="flex flex-col items-center mt-10 mb-5"
        >
          <Typography.Text className="text-center font-normal text-base mb-5">
            Mã OTP đã được gửi tới Email của bạn. <br /> Vui lòng nhập mã OTP để
            tiếp tục.
          </Typography.Text>
          <Form.Item
            name="otpCode"
            rules={[{ required: true, message: 'Vui lòng nhập mã OTP!' }]}
          >
            <Input.OTP size="large" />
          </Form.Item>

          <Button
            type="text"
            className="mb-5"
            onClick={handleResendOTP}
            disabled={!timerExpired && remainingTime > 0}
          >
            <p className="underline">
              {remainingTime > 0
                ? `Gửi lại mã OTP sau: ${Math.floor(remainingTime / 60)} phút ${
                    remainingTime % 60
                  } giây`
                : 'Gửi lại mã OTP'}
            </p>
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            disabled={timerExpired}
            onClick={() => {
              otpForm.submit();
            }}
          >
            Xác nhận
          </Button>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default ResultSearchPage;
