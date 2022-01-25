import axios from 'axios';
import queryString from 'query-string';
import { getLocalStorage } from '../localStorage';

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

<<<<<<< HEAD
// axiosInstance.interceptors.request.use((request) => {
//   const accessToken = getLocalStorage('token');
//   const accessHeader = `Bearer ${accessToken}`;
//   if (request.headers) request.headers['Authorization'] = accessHeader;
//   return request;
// });
=======
axiosInstance.interceptors.request.use((request) => {
  const accessToken = getLocalStorage('currentId');
  const accessHeader = `Bearer ${accessToken}`;
  console.log('token', accessHeader);
  if (request.headers) request.headers['Authorization'] = accessHeader;
  return request;
});
>>>>>>> LeoAsher
