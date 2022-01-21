import { axiosInstance } from "../../../services/api/axiosInstance";

export const todoApiMethod = {
  addTodo: (data) => {  // data = newTodo
    const url = '/todos' ;
    return axiosInstance.post(url, data)
  }
}