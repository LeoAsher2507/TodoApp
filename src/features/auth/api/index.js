import { axiosInstance } from "../../../services/api/axiosInstance";
import { getLocalStorage } from "../../../services/localStorage";


export const AuthApiMethod = {
  login: (data) => { 
    const url = `/Accounts/login`;
    return axiosInstance.post(url, data)
  },

  register: (data) => { 
    const url = `/Accounts/replaceOrCreate`;
    return axiosInstance.post(url, data)
  },

  getUserInfo: (id) => {
    const url = `Accounts/${1}?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.get(url)
  }
}