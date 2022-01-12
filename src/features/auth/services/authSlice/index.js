import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../../../../services/localStorage';
import { loginMethod } from '../authThunk';

const initialState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginMethod.fulfilled, (state, action) => {
      setLocalStorage('token', action.payload.id);
      console.log('test response', action.payload);
    });
  },
});

export const authReducer = authSlice.reducer;
