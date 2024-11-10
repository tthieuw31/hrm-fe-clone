export interface IBaseResponse<T> {
  data: T;
  status: StatusResponse;
}

export interface StatusResponse {
  message?: string;
  code: number;
  success: boolean;
}
