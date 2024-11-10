import { IBaseResponse } from 'apis/base/IBaseResponse';
import { axiosClient, axiosClientDev } from '../axiosClient';
import { get } from 'lodash';
const path = 'home';
const pathPortal = 'home_portal';
const HomeAPI = {
  get: async (): Promise<IBaseResponse<HomeData>> => {
    const params = '/portal';
    return await axiosClient.get('home-page' + params);
  },
  getList: async (data?: GetListRequest): Promise<IBaseResponse<JobList>> => {
    let params = '/list';
    if (data) {
      params +=
        '?page=' + data.page.toString() + '&size=' + data.size.toString();
      if (data.recruitmentName) {
        params += '&recruitmentName=' + data.recruitmentName;
      }
      if (data.blockDepartmentCode) {
        params += '&blockDepartmentCode=' + data.blockDepartmentCode;
      }
      if (data.workingPlace) {
        params += '&workingPlace=' + data.workingPlace;
      }
      if (data.workTypeCode) {
        params += '&workTypeCode=' + data.workTypeCode;
      }
      if (data.experienceCode) {
        params += '&experienceCode=' + data.experienceCode;
      }
      if (data.jobTitlesCode) {
        params += '&jobTitlesCode=' + data.jobTitlesCode;
      }
      if (data.titleCode) {
        params += '&titleCode=' + data.titleCode;
      }
      // if (data.salaryFrom && data.salaryTo) {
      params += '&salaryFrom=' + data.salaryFrom + '&salaryTo=' + data.salaryTo;
      // }
    }
    return await axiosClient.get(path + params);
  },
  getDetail: async (id: any): Promise<IBaseResponse<JobDetail>> => {
    let params = '/detail';
    if (id) {
      params += `?url=${id}`;
    }
    return await axiosClient.get(path + params);
  },
  getNews: async (
    data?: ArticleListReq
  ): Promise<IBaseResponse<ArticleListRes>> => {
    let params = '/lifestyle';
    if (data) {
      params +=
        '?page=' + data.page.toString() + '&size=' + data.size.toString();
    }
    return await axiosClient.get(pathPortal + params);
  },
  getArticleDetail: async (url: any): Promise<IBaseResponse<ArticleDetail>> => {
    let params = '/article';
    if (url) {
      params += `/${url}`;
    }
    return await axiosClient.get(pathPortal + params);
  },
  sendContact: async (data: any): Promise<IBaseResponse<SendContRes>> => {
    const params = '/contact';
    return await axiosClient.post(pathPortal + params, JSON.stringify(data));
  },
  getBanner: async (req: string): Promise<IBaseResponse<Array<Banner>>> => {
    let params = '/company';
    if (req) {
      params += `/${req}`;
    }
    return await axiosClient.get(pathPortal + params);
  },
  getOTPByEmail: async (data: any): Promise<IBaseResponse<any>> => {
    const params = '/send-otp-lookup-results';
    return await axiosClient.post(path + params, JSON.stringify(data));
  },
  lookupApplyResult: async (
    reqData: any
  ): Promise<IBaseResponse<LookupApplyResponse>> => {
    const params = '/lookup-results';
    // if (reqData) {
    //   params += `/${reqData}`;
    // }
    return await axiosClient.post(path + params, JSON.stringify(reqData));
  },
  getPoster: async (): Promise<IBaseResponse<Array<Poster>>> => {
    return await axiosClient.get(path + '/poster-recruitment');
  },
};
export default HomeAPI;

export interface StatusResponse {
  message?: string;
  code: number;
  success: boolean;
}

export interface HomeData {
  bannerList: Array<Banner>;
  articleList: Array<Article>;
  recruitmentList: Array<Recruitment>;
  bannerCenterList: Array<Banner>;
  bannerSlideShowList: Array<Banner>;
}

export interface Banner {
  id: string;
  titleName: string;
  description: string;
  thumbnail: string;
  typeDevice: string;
  sort: number;
}

export interface Article {
  id: string;
  titleName: string;
  summary: string;
  thumbnail: string;
  sort: number;
  datePublish: Date;
  url: string;
}

export interface ArticleDetail {
  id: string;
  url: string;
  titleName: string;
  summary: string;
  description: string;
  thumbnail: string;
  sort: number;
  datePublish: string;
  isPublish: boolean;
  employeeId: number;
  employeeCode: string;
  employeeName: string;
  createAt: string;
  updateAt: string;
}

export interface Recruitment {
  id: number;
  url: string;
  recruitmentName: string;
  description: string;
  thumbnail: string;
  sort: number;
  companyCode: string;
  publicityDay: Date;
  isSalaryAgreement: boolean;
  expireDate: Date;
  numberOfRecruits: number;
  salaryMin: number;
  salaryMax: number;
  workplaceAddress: Array<Address>;
}

export interface JobDetail {
  id: number;
  url: string;
  address: string;
  descriptionRecruitment: string;
  jobRecruitment: string;
  salaryMin: number;
  salaryMax: number;
  isSalaryAgreement: boolean;
  expireDate: Date;
  gender: string;
  ageMin: number;
  ageMax: number;
  numberOfRecruits: number;
  educationLevelCode: string;
  experienceCode: string;
  departmentCode: string;
  jobTitlesCode: string;
  professionsCode: string;
  companyCode: string;
  recruitmentName: string;
  statusCode: string;
  workTypeCode: string;
  benefits: string;
  workingTimeCode: string;
  blockDepartmentCode: string;
  publicityDay: Date;
  workplaceAddress: Array<Address>;
  isReferral: boolean;
  isPortfolio: boolean;
}

export interface Address {
  code: string;
  // name: string;
  // parentCode: string;
  categoryType: string;
}

export interface GetListRequest {
  blockDepartmentCode?: string | null;
  experienceCode: string | null;
  recruitmentName: string | null;
  workingPlace: string | null;
  workTypeCode: string | null;
  titleCode: string | null;
  jobTitlesCode: string | null;
  salaryFrom: number;
  salaryTo: number;
  page: number;
  size: number;
}

export interface JobList {
  content: Array<Recruitment>;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalRows: number;
  totalElements: number;
}

export interface SendContRes {
  id: string;
  fullName: string;
  phoneNumber: string;
  content: string;
  email: string;
  isSendMail: boolean;
  createAt: Date;
  updateAt: Date;
}

export type LookupApplyResponse = Array<LookupApplyRes>;

export interface LookupApplyRes {
  id: number;
  candidateName: string;
  candidateEmail: string;
  candidatePhoneNumber: string;
  result: Array<ApplyResult>;
}

export interface ApplyResult {
  id: number;
  applicantStatusCode: string;
  applicantDate: string;
  recruitmentName: string;
  recruitmentId: number;
}

export interface ArticleListReq {
  page: number;
  size: number;
}

export interface ArticleListRes {
  content: Array<Article>;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Poster {
  url: string;
  urlImageRecruitment: string;
  sortId: 0;
}
