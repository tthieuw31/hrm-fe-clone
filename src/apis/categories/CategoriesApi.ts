import { axiosClient } from '../axiosClient';

const CategoriesApi = {
  getCategoriesData: async (): Promise<IBaseResponse<CategoriesData>> => {
    return await axiosClient.get('portal/category');
  },
};
export default CategoriesApi;

export interface CategoriesData {
  listProvinces: Array<Province>;
  listDistricts: Array<District>;
  listWards: Array<Ward>;
  listCareerTitles: Array<CareerTitleDetail>;
  listExperience: Array<Experience>;
  listProfessions: Array<Profession>;
  listEducationLevel: Array<EducationLevel>;
  listRecruitmentStatus: Array<RecruitmentStatus>;
  listTypeOfWorks: Array<TypeOfWorks>;
  listWorkingTimes: Array<WorkingTimes>;
  listCompanies: Array<Company>;
  listDepartments: Array<Department>;
  listBlockDepartments: Array<BlockDepartment>;
  listTitles: Array<Title>;
  listActionScreens: Array<ActionScreen>;
  // listBenefits: Array<Benefit>;
  listBranch: Array<Branch>;
  listNationality: Array<National>;
  listReligion: Array<Religion>;
  listEthnic: Array<Ethnic>;
  listWorkplace: Array<Workplace>;
  listDependent: Array<Dependent>;
  listTrainingForm: Array<TrainingForm>;
  listPlaceOfCID: Array<PlaceOfCID>;
  listTimekeepingLocation: Array<TimekeepingLocation>;
  listBank: Array<Bank>;
  listWorkingStatus: Array<WorkingStatus>;
  listUnits: Array<Unit>;
  listGroups: Array<Group>;
}

export interface Province {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
  fullName: string;
}

export interface District {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
  fullName: string;
}

export interface Ward {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
  fullName: string;
}

export interface CareerTitleDetail {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Experience {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Profession {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface EducationLevel {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface RecruitmentStatus {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface TypeOfWorks {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface WorkingTimes {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

// export interface Benefit {
//   code: string;
//   name: string;
//   sort: number;
//   parentCode: string;
//   isDefaultSelect: boolean;
// }

export interface Company {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Department {
  code: string;
  name: string;
  sort: number;
  companyCode: string;
  branchCode: string;
  blockDepartmentCode: string;
}

export interface BlockDepartment {
  code: string;
  name: string;
  sort: number;
  companyCode: string;
  branchCode: string;
}

export interface Title {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface ActionScreen {
  id: number;
  nameScreen: string;
  viewDes: string;
  createDes: string;
  updateDes: string;
  deleteDes: string;
  printDes: string;
}

export interface Branch {
  code: string;
  name: string;
  sort: number;
  companyCode: string;
}

export interface National {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Religion {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Ethnic {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Workplace {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Dependent {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface TrainingForm {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface PlaceOfCID {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface TimekeepingLocation {
  code: string;
  name: string;
  sort: number;
  address: string;
  radius: number;
}

export interface Bank {
  code: string;
  name: string;
  sort: number;
  tradingName: string;
}

export interface WorkingStatus {
  code: string;
  name: string;
  sort: number;
  parentCode: string;
}

export interface Unit {
  code: string;
  name: string;
  sort: number;
  companyCode: string;
  branchCode: string;
  blockDepartmentCode: string;
  departmentCode: string;
}

export interface Group {
  code: string;
  name: string;
  sort: number;
  companyCode: string;
  branchCode: string;
  blockDepartmentCode: string;
  departmentCode: string;
  unitCode: string;
}

export interface StatusResponse {
  message?: string;
  code: number;
  success: boolean;
}
interface IBaseResponse<T> {
  data: T;
  status: StatusResponse;
}
// interface IBaseResponse1<IBaseResponse> {
//   data: IBaseResponse;
// }
