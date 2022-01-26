import { axiosInstance } from "../../../services/api/axiosInstance";
import { getLocalStorage } from "../../../services/localStorage";


export const AuthApiMethod = {
  login: (data) => {
    console.log("check1", data)
    const url = `/Accounts/login`;
    return axiosInstance.post(url, data)
  },

  register: (data) => {
    console.log("check1", data)
    const url = `/Accounts/replaceOrCreate`;
    return axiosInstance.post(url, data)
  },

  getUserInfo: (id) => {
    const url = `Accounts/${id}?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.get(url)
  },
  
  changePassword: (data) => {
    const url = `Accounts/change-password?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.post(url, data)
  }

}