import { createSlice } from '@reduxjs/toolkit';
import {   setLocalStorage } from '../../../services/localStorage';
import { loginMethod, registerMethod } from './authThunk';

const initialState = {
  token: '',
  currentId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginMethod.fulfilled, (state, action) => {
        console.log('Login successfully!', action.payload.id);
        state.currentId = action.payload.id; 
        setLocalStorage('currentId', state.currentId);
      })
      .addCase(loginMethod.rejected, (state, action) => {
        console.log('reject');
      })

      .addCase(registerMethod.fulfilled, (state, action) => {
        console.log('success1');
      })
      .addCase(registerMethod.rejected, (state, action) => {
        console.log('reject1');
      });
  },
});

export const authReducer = authSlice.reducer;
