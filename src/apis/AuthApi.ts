import { axiosClient } from './axiosClient';

const AuthApi = {
  signIn: async (data: SignInUserRequest): Promise<SignInResponse> => {
    return await axiosClient.post('user/signin', data);
  },

  healthcheck: async (): Promise<string> => {
    return await axiosClient.get('health');
  },
  getMe: async (): Promise<any> => {
    return await axiosClient.get('/auth/me');
  },
};

export default AuthApi;
export interface SignInResponse {
  status: StatusResponse;
  data: SignInUserResponse;
}

export interface StatusResponse {
  message?: string;
  code: number;
  success: boolean;
}

export interface SignInUserResponse {
  token: string;
  id: string;
  username: string;
  email: string;
}
export interface SignInUserRequest {
  username: string;
  password: string;
  authorize_code: string;
}
