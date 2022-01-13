import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApiMethod } from '../../api';

export const loginMethod = createAsyncThunk(
  'auth/loginMethod',
  async (data) => {
    try {
      const response = await AuthApiMethod.login(data);
      return response.data;
    } catch (error) { 
       console.log('error ne: ', error);
    }
  }
);

export const registerMethod = createAsyncThunk(
  'auth/registerMethod',
  async (data) => {
    try {
      const response = await AuthApiMethod.register(data);
      return response.data;
    } catch (error) {
       console.log('error ne: ', error); 
    }
  }
);

export const resetPasswordMethod = createAsyncThunk(
  'auth/resetPasswordMethod',
  async (data) => {
    try {
      const response = await AuthApiMethod.resetPassword(data);
      return response.data;
    } catch (error) {
      console.log('error ne: ', error);
    }
  }
);


