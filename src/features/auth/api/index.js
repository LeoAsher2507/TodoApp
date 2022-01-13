import { axiosInstance } from "../../../services/api/axiosInstance";


export const AuthApiMethod = {
  login: (data) => { 
    const url = `/Accounts/login`;
    return axiosInstance.post(url, data)
  },

  register: (data) => { 
    const url = `/Accounts`;
    return axiosInstance.post(url, data)
  },

  resetPassword: (data) => {
    const url = '/Accounts/reset'
    return axiosInstance.post(url, data)
  }
}