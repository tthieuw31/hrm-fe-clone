import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
  Select,
  Spin,
  Typography,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import { useMutation } from 'react-query';
import { openNotificationWithIcon } from 'utils/notification';
import {
  EcoPharmaLogo,
  EplusLogo,
  TamAnhHosLogo,
  TamriLogo,
  VnvcLogo,
} from 'assets/svg';
import { filterOption } from 'utils/selectTagFilterOption';
import { Gender, MaritalStatus } from 'utils/constants';
import moment from 'moment';
import dayjs from 'dayjs';
import { CategoriesData } from 'apis/categories/CategoriesApi';
import UpdateProfileApi, {
  ProfileFormDetail,
  UpdateRq,
} from './api/UpdateProfileApi';
import StudyHistoryBlock from './components/EditUserProfile/StudyHistoryBlock';
import WorkExperiencesBlock from './components/EditUserProfile/WorkExperiencesBlock';
import NotificationModal, {
  TypeNotification,
} from 'components/NotificationModal';
import UploadPicture from 'components/UploadPicture';
import CandidateApplyAPI from 'apis/home/CandidateApplyAPI';
import ReCAPTCHA from 'react-google-recaptcha';
import CaptchaBox from 'components/CapchaBox';

const ProfileForm = (): React.ReactElement => {
  const isMounted = useRef(false);
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const { Title } = Typography;
  const dateFormat = 'DD-MM-YYYY';
  function disabledDate(current: any) {
    return current && current > moment().startOf('day');
  }
  const [categoriesData, setCategoriesData] = useState<CategoriesData>();
  const [formDetail, setFormDetail] = useState<ProfileFormDetail | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<TypeNotification>('success');
  const [modalMessage, setModalMessage] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const uid = searchParams.get('uid');

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

  //Effect get detail information
  useEffect(() => {
    isMounted.current = true;
    if (uid && !formDetail) {
      const fetchDetail = async () => {
        try {
          const response = await UpdateProfileApi.getProfileForm(uid);
          if (response.status.code === 404) {
            setModalOpen(true);
            setModalType('error');
            setModalMessage('Link ứng tuyển này đã hết hạn');
            setModalDescription('');
          }
          if (isMounted.current) {
            console.log('response', response.data);
            setFormDetail(response.data);
          }
        } catch (error) {
          console.error('Error fetching:', error);
        }
      };
      fetchDetail();
    }
    return () => {
      isMounted.current = false;
    };
  }, [uid]);

  //mapping data
  useEffect(() => {
    if (formDetail) {
      const initialValues = {
        candidateName: formDetail?.candidateName,
        candidatePhoneNumber: formDetail?.candidatePhoneNumber,
        candidateEmail: formDetail?.candidateEmail,
      };
      form.setFieldsValue(initialValues);
    }
  }, [formDetail]);

  //Update & Create func
  const { mutate: postProfile } = useMutation(UpdateProfileApi.postProfile, {
    onSuccess: (data) => {
      if (data.status.code === 200) {
        if (!isMounted.current) return;
        // openNotificationWithIcon(
        //   'success',
        //   'Cập nhật thông tin thành công',
        //   JSON.stringify(data.status.code)
        // );
        setModalOpen(true);
        setModalType('success');
        setModalMessage('Cập nhật thông tin thành công');
        setModalDescription('Hẹn gặp lại bạn tại buổi phỏng vấn!');
      } else {
        // openNotificationWithIcon(
        //   'error',
        //   data.status.message ? data.status.message : '',
        //   JSON.stringify(data.status.code)
        // );

        setModalOpen(true);
        setModalType('error');
        setModalMessage('Cập nhật thông tin không thành công');
        setModalDescription(data.status.message ? data.status.message : '');
      }
    },
    onError: (error: any) => {
      if (!isMounted.current) return;
      console.log('Error:', error);
    },
  });

  const handleSubmit = async (values: any) => {
    const recaptchaValue = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    const formattedStudyProcesses = values.candidateStudyProcesses?.map(
      (studyProcess: any) => ({
        ...studyProcess,
        fromDate: dayjs(studyProcess.fromDate).format('YYYY-MM-DDTHH:mm:ss'),
        toDate: dayjs(studyProcess.toDate).format('YYYY-MM-DDTHH:mm:ss'),
      })
    );

    const formattedWorkExperiences = values.candidateWorkExperienceList?.map(
      (workExperience: any) => ({
        ...workExperience,
        fromDate: dayjs(workExperience.fromDate).format('YYYY-MM-DDTHH:mm:ss'),
        toDate: dayjs(workExperience.toDate).format('YYYY-MM-DDTHH:mm:ss'),
      })
    );

    try {
      let objectName = '';
      let bucketName = '';
      if (values.userFile && values.userFile.length > 0) {
        const formData = new FormData();
        if (recaptchaValue) {
          formData.append('file', values.userFile[0].originFileObj);
          formData.append('gRecaptchaResponse', recaptchaValue);

          console.log('formData', formData);
          const response = await CandidateApplyAPI.postFile(formData);

          console.log('response', response);
          if (response.data) {
            objectName = response.data.objectName;
            bucketName = response.data.bucketName;
          }
        }
      }

      const transformedData: UpdateRq = {
        uid: uid!,
        candidatePhoneNumber: values.candidatePhoneNumber,
        candidateBirthday: dayjs(values.candidateBirthday).format(
          'YYYY-MM-DDTHH:mm:ss'
        ),
        candidateGender: values.candidateGender,
        maritalStatusCode: values.maritalStatusCode,
        cid: values.cid,
        dateOfCID: dayjs(values.dateOfCID).format('YYYY-MM-DDTHH:mm:ss'),
        placeOfCIDCode: values.placeOfCIDCode,
        streetName: values.streetName,
        presentAccommodationCode: values.presentAccommodationCode,
        desiredSalary: parseFloat(values.desiredSalary),
        introduceYourself: values.introduceYourself,
        candidateStudyProcesses: formattedStudyProcesses,
        candidateWorkExperienceList: formattedWorkExperiences,
        objectName: objectName,
        bucketName: bucketName,
      };

      console.log('transformedData', transformedData);

      postProfile(transformedData);
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      message:
        'Vui lòng kiểm tra lại các trường thông tin bắt buộc và thử lại.',
      // description: JSON.stringify(errorInfo),
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!categoriesData) return <Spin size="default" fullscreen />;

  const provinces = categoriesData?.listProvinces;
  const districts = categoriesData?.listDistricts;
  const wards = categoriesData?.listWards;

  const mergeLocations = () => {
    return [
      ...provinces.map((item) => ({
        key: item.code,
        value: item.code,
        label: item.fullName,
      })),
      ...districts.map((item) => ({
        key: item.code,
        value: item.code,
        label: item.fullName,
      })),
      ...wards.map((item) => ({
        key: item.code,
        value: item.code,
        label: item.fullName,
      })),
    ];
  };

  const combinedLocationOptions = mergeLocations();

  return (
    <Content className="main-content flex flex-col justify-center items-center min-h-screen pb-10">
      <div className="flex justify-between items-center py-10 w-full max-w-6xl">
        <EcoPharmaLogo className="eco-pharma-logo" />
        <EplusLogo />
        <VnvcLogo />
        <TamAnhHosLogo className="tam-anh-hos-logo" />
        <TamriLogo className="tamri-logo" />
      </div>
      <div className="form-container-profile max-w-6xl">
        <>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <div className="flex flex-col items-center justify-between mb-0">
              <Title
                level={2}
                className="text-base"
                style={{ color: '#277DA1' }}
              >
                TUYỂN DỤNG ECO PHARMA - EPLUS
              </Title>
            </div>
            <Divider />

            <div className="flex flex-col items-center justify-center mb-7">
              <Typography.Text className="text-lg italic">
                *Lưu ý: Kiểm tra kỹ thông tin trước khi xác nhận (đây là mẫu
                điền một lần)*
              </Typography.Text>
            </div>

            <Title level={3} className="text-base" style={{ color: '#277DA1' }}>
              Thông tin cá nhân
            </Title>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={'candidateName'}
                  label="Họ và tên"
                  rules={[{ required: true, message: 'Nhập họ và tên!' }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'candidateBirthday'}
                  label="Ngày sinh"
                  className="w-full"
                  rules={[{ required: true, message: 'Chọn ngày sinh!' }]}
                >
                  <DatePicker
                    format={dateFormat}
                    disabledDate={disabledDate}
                    placeholder="01-01-2024"
                    size="large"
                    className="w-full"
                  />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item
                  name={'candidateGender'}
                  label="Giới tính"
                  rules={[{ required: true, message: 'Chọn giới tính!' }]}
                >
                  <Select size="large" options={Gender} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={'maritalStatusCode'}
                  label="Tình trạng hôn nhân"
                  rules={[
                    { required: true, message: 'Chọn tình trạng hôn nhân!' },
                  ]}
                  initialValue={'SINGLE'}
                >
                  <Select size="large" options={MaritalStatus} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'candidatePhoneNumber'}
                  label="Số điện thoại"
                  rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'candidateEmail'}
                  label="Email"
                  rules={[{ required: true, message: 'Nhập email!' }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'cid'}
                  label="CMT/CCCD/Hộ chiếu"
                  rules={[
                    { required: true, message: 'Nhập số CMT/CCCD/Hộ chiếu!' },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'dateOfCID'}
                  label="Ngày cấp"
                  rules={[{ required: true, message: 'Chọn ngày cấp!' }]}
                >
                  <DatePicker
                    format={dateFormat}
                    disabledDate={disabledDate}
                    placeholder="01-01-2024"
                    size="large"
                    className="w-full"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'placeOfCIDCode'}
                  label="Nơi cấp"
                  rules={[{ required: true, message: 'Chọn nơi cấp!' }]}
                >
                  <Select
                    filterOption={filterOption}
                    showSearch
                    allowClear
                    size="large"
                  >
                    {categoriesData?.listPlaceOfCID.map((item) => (
                      <Select.Option key={item.code} value={item.code}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'streetName'}
                  label="Nơi ở hiện tại"
                  rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'presentAccommodationCode'}
                  label="Xã phường, Quận huyện, Tỉnh thành"
                  //   rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                >
                  <Select
                    filterOption={filterOption}
                    showSearch
                    allowClear
                    size="large"
                  >
                    {combinedLocationOptions.map((item) => (
                      <Select.Option key={item.key} value={item.value}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name={'desiredSalary'} label="Mức lương mong muốn">
                  <InputNumber
                    size="large"
                    controls={false}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) =>
                      value?.replace(/\$\s?|(,*)/g, '') as unknown as number
                    }
                    className="w-full"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name={'introduceYourself'}
                  label="Giới thiệu bản thân"
                >
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label="Ảnh cá nhân"
                  name="userFile"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <UploadPicture />
                </Form.Item>
              </Col>
            </Row>

            <Title level={3} className="text-base" style={{ color: '#277DA1' }}>
              Trình độ học vấn
            </Title>

            <StudyHistoryBlock form={form} type="candidate" />

            <Title level={3} className="text-base" style={{ color: '#277DA1' }}>
              Kinh nghiệm làm việc
            </Title>

            <WorkExperiencesBlock form={form} type="candidate" />

            <CaptchaBox reference={recaptchaRef} />

            <Row justify="center">
              <Col>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-blue-600 text-white text-sm md:text-sm"
                  >
                    Xác nhận
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </>
      </div>

      <NotificationModal
        type={modalType}
        message={modalMessage}
        description={modalDescription}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Content>
  );
};

export default ProfileForm;
