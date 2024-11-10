import axios, { AxiosInstance } from 'axios';
import queryString from 'querystring';
import * as dotenv from 'dotenv';
dotenv.config();

const defaultToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocm0tZWNvLWVwbHVzIiwiaWF0IjoxNzA0MDQyMDAwLCJleHAiOjE3NjcyMDAzOTl9.ujYO6ENLEV8vmcsEA99kv_rwDuWgxXCZ6HkV-g5_PH8';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  // if (localStorage.getItem('token') != null) {
  //   const obj = JSON.parse(localStorage.getItem('token')!);
  //   (config as any).headers.Authorization = obj.token
  //     ? `Bearer ${obj.token}`
  //     : '';
  // }
  (config as any).headers.Authorization = `Bearer ${defaultToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    console.log('--=DATA RESPONSE=-' + response.request.responseURL, response);
    return response.data;
  },
  (error) => {
    console.log('--=DATA ERROR=-', error);
    // if (error.response && error.response.status === 401) {
    //   localStorage.removeItem('token');
    // window.location.href = '/404';
    // }
    return error;
  }
);

export const axiosClientDev: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DEV_API_BASE_URL,

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});
axiosClientDev.interceptors.request.use((config) => {
  (config as any).headers.Authorization = `Bearer ${defaultToken}`;
  return config;
});
axiosClientDev.interceptors.response.use(
  (response) => {
    console.log('--=DATA RESPONSE=-' + response.request.responseURL, response);
    return response.data;
  },
  (error) => {
    console.log('--=DATA ERROR=-', error);
    return error;
  }
);
