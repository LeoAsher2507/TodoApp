import axios from 'axios';
import queryString from 'query-string';
import { getAccessToken } from '../localStorage';

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// axiosInstance.interceptors.request.use((request) => {
//   const accessToken = getAccessToken();
//   const accessHeader = `Bearer ${accessToken}`;
//   if (request.headers) request.headers['Authorization'] = accessHeader;
//   return request;
// });
