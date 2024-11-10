import { IBaseResponse, StatusResponse } from 'apis/base/IBaseResponse';
import { axiosClient, axiosClientDev } from 'apis/axiosClient';
import { CategoriesData } from 'apis/categories/CategoriesApi';

const UpdateProfileApi = {
  getCategories: async (): Promise<IBaseResponse<CategoriesData>> => {
    return await axiosClient.get('/portal/category');
  },
  getProfileForm: async (
    uid: string
  ): Promise<IBaseResponse<ProfileFormDetail>> => {
    const params = `/home/getCandidate/${uid}`;
    return await axiosClientDev.get(params);
  },
  postProfile: async (data: any): Promise<IBaseResponse<UpdateRq>> => {
    const params = `/home/updateCandidate`;
    return await axiosClientDev.post(params, JSON.stringify(data));
  },
  // updateFB: async (data: any): Promise<IBaseResponse<UpdateRequest>> => {
  //   return await axiosClient.put(path, JSON.stringify(data));
  // },
};
export default UpdateProfileApi;

export interface ProfileFormDetailResp {
  status: StatusResponse;
  data: ProfileFormDetail;
}

export interface ProfileFormDetail {
  uid: string;
  candidateName: string;
  candidatePhoneNumber: string;
  candidateEmail: string;
  // candidateBirthday: string;
  // candidateGender: string; // FEMALE, MALE, OTHER
  // cid: string; // Số căn cước công dân, cmt v.v
  // dateOfCID: string; // ngày tạo số căn cước
  // placeOfCIDCode: string; // Nơi cấp cccd
  // streetName: string; // Chỗ ở hiện nay, số nhà tên đường.
  // presentAccommodationCode: string; // Code quận,huyện phường xã
  // desiredSalary: number;
  // introduceYourself: string;
  // candidateStudyProcesses: StudyProcess[];
  // candidateWorkExperienceList: WorkExperience[];
}

interface StudyProcess {
  fromDate: string; //từ tháng
  toDate: string; // đến tháng
  trainingPlace: string; // nơi đào tạo
  formOfTrainingCode: string; // hình thức đào tạo
  specialized: string; // Chuyên ngành
  educationLevelCode: string; // TRÌNH ĐỘ
}

interface WorkExperience {
  fromDate: string;
  toDate: string;
  companyName: string; // Công ty
  positionName: string; // Vị trí
  descriptionJob: string; // mô tả công việc
  contactPerson: string; // người liên hệ
  reasonForLeavingJob: string; // lý do nghỉ việc
  salary: number; // mức lương
}

export interface UpdateRq {
  uid: string;
  candidatePhoneNumber: string;
  candidateBirthday: string;
  candidateGender: string;
  cid: string;
  dateOfCID: string; // ngày tạo số căn cước
  placeOfCIDCode: string; // Nơi cấp cccd
  streetName: string; // Chỗ ở hiện nay, số nhà tên đường.
  presentAccommodationCode: string; // Code quận,huyện phường xã
  desiredSalary: number;
  introduceYourself: string;
  maritalStatusCode: string;
  objectName?: string; // objectName: giá trị trả về khi call service upload file
  bucketName?: string; // bucketName: giá trị trả về khi call service upload file
  avatarCandidate?: string;
  candidateStudyProcesses: Array<StudyProcess>;
  candidateWorkExperienceList: Array<WorkExperience>;
}

export interface SuitabilityDetail {
  id: number;
  resultOfEvaluationId: number;
  suitabilityAssessmentId: number;
  suitabilityAssessmentDescription: string;
  suitabilityAssessmentName: string;
  weight: number;
  sort: number;
  point: number;
  summaryScore: number;
  applicantEvaluationFormCriteriaPoints: Array<CriteriaPoint>;
}

export interface CriteriaPoint {
  id: number;
  evaluationFormCriteriaPointId: number;
  evaluativeCriteriaId: number;
  evaluativeCriteriaName: string;
  weight: number;
  percent: number;
  point: number;
  sort: number;
  commentNote: string | null;
  isHighLight: boolean;
  parentId: number;
}

export interface InterviewPoint {
  id: number;
  point: number;
  percent: number;
  evaluationFormCriteriaPointId: number;
  commentNote: string;
}

export interface EvaluationResult {
  id: number;
  point: number;
  summaryScore: number;
  resultOfEvaluationId: number;
}
