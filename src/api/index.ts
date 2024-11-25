import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { queryClient } from './react-query';
import { clearCookie, getCookie } from '@/utils/storage';

const { API_BASE, API_VERSION } = import.meta.env;

export const axiosClient = Axios.create({
  baseURL: `${API_BASE}/${API_VERSION}`,
});

export const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = getCookie('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
};

axiosClient.interceptors.request.use(authRequestInterceptor);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      clearCookie('access_token');
      clearCookie('refresh_token');
      localStorage.clear();
      queryClient.clear();
    }
    throw error;
  },
);

export default axiosClient;
