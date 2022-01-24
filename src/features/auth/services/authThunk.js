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