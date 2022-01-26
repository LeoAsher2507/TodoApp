import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApiMethod } from '../api/index';

export const loginMethod = createAsyncThunk(
  `auth/loginMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.login(data);
      console.log('test', response);
      return response.data;
    } catch (err) {}
  }
);

export const registerMethod = createAsyncThunk(
  `auth/registerMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.register(data);
      console.log('test', response);
      return response.data;
    } catch (err) {}
  }
);

export const getUserInfoMethod = createAsyncThunk(
  `auth/getUserInfoMethod`,
  async (id) => {
    try{
      const response = await AuthApiMethod.getUserInfo(id);
      console.log('userInfo', response);
      return response.data;
    } catch(err) {}
  }
);

export const changePasswordMethod = createAsyncThunk(
  `auth/changePasswordMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.changePassword(data);
      console.log('change password', response);
      return response.data;
    } catch (err) {}
  }
);

