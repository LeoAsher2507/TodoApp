import { axiosInstance } from "../../../services/api/axiosInstance";


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
  }
}