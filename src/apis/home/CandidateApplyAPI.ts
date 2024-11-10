import { axiosClient, axiosClientDev } from 'apis/axiosClient';
import { IBaseResponse } from 'apis/base/IBaseResponse';

const path = 'home';
const pathPortal = 'home_portal';

const CandidateApplyAPI = {
  post: async (data: any): Promise<IBaseResponse<CandidateApplyRequest>> => {
    const params = '/createCandidate';
    return await axiosClientDev.post(path + params, JSON.stringify(data));
  },
  postFile: async (data: any): Promise<IBaseResponse<UploadFileRes>> => {
    const params = '/upload';
    return await axiosClient.post(pathPortal + params, data);
  },
  applyCV: async (data: any): Promise<IBaseResponse<any>> => {
    const params = '/applyCV';
    return await axiosClientDev.post(path + params, JSON.stringify(data));
  },
};
export default CandidateApplyAPI;

export interface CandidateApplyRequest {
  recruitmentId: number;
  candidateName: string;
  candidateEmail: string;
  candidatePhoneNumber: string;
  objectName: string;
  bucketName: string;
  portfolio: string;
}

export interface UploadFileRes {
  objectName: string;
  bucketName: string;
  url: string;
}

export interface StudyProcess {
  fromDate: Date;
  toDate: Date;
  trainingPlace: string;
  formOfTrainingCode: string;
  specialized: string;
  educationLevelCode: string;
}

export interface WorkExperience {
  fromDate: Date;
  toDate: Date;
  workplace: string;
  positionName: string;
  descriptionJob: string;
}
