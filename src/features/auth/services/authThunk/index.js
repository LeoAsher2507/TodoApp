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
