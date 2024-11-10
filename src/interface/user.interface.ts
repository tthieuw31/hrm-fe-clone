export interface IUser {
  id: number;
  fullName: string;
  email: string;
  jobTitleCode: string;
  jobTitle: string;
  plantCode: number;
  departmentCode: number;
  departmentName: string;
  divisionCode: number;
  division: string;
  organization: number;
  phoneNumber: string;
  managerEmail: string;
  group: string;
  groups: string[];
  role: string;
  groupLogin: string;
  functions: string[];
}
export interface SignInVars {
  code: string;
}
export interface SignInDataResponse {
  token: string;
}

export interface IPermissionGroup {
  description: string;
  name: string;
  title: string;
}

export interface IGetUserQuery {
  page?: number;
  page_size?: number;
  search?: string;
  column?: string;
  orderBy?: string;
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  jobTitleCode?: string;
  jobTitle?: string;
  plantCode?: string;
  departmentCode?: string;
  departmentName?: string;
  divisionCode?: string;
  division?: string;
  organization?: string;
}

export interface IGetProductUploadQuery {
  page?: number;
  page_size?: number;
  search?: string;
  column?: string;
  orderBy?: string;
  stt?: string;
  image?: string;
  code?: string;
  name?: string;
}
