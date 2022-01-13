import { createSlice } from '@reduxjs/toolkit';
import {
  getLocalStorage,
  setLocalStorage,
} from '../../../../services/localStorage';
import { loginMethod, registerMethod, resetPasswordMethod } from '../authThunk';

const initialState = {
  token: getLocalStorage('token'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginMethod.fulfilled, (state, action) => {
      state.token = action.payload.id;
      setLocalStorage('token', action.payload.id);
      console.log('dang nhap thanh cong', action.payload);
    })

    // .addCase(loginMethod.rejected, (state, action) => {
    //   console.log('error ne: ', action.payload);
    // })

    .addCase(registerMethod.fulfilled, (state, action) => {
      console.log("dang ki thanh cong", action.payload)
    })

    // .addCase(registerMethod.rejected, (state, action) => {
    //   console.log('error ne: ', action.payload);
    // })

    .addCase(resetPasswordMethod.fulfilled, (state, action) => {
      console.log("reset thanh cong", action.payload)
    })

    // .addCase(resetPasswordMethod.rejected, (state, action) => {
    //   console.log('error ne: ', action.payload);
    // })
  },
});

export const authReducer = authSlice.reducer;
