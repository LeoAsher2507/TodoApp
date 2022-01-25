import { createSlice } from '@reduxjs/toolkit';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../../services/localStorage';
import { loginMethod, registerMethod } from './authThunk';

const initialState = {
  userId: getLocalStorage('userID'),
  currentId: getLocalStorage('currentId'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutMethod: (state) => {
      state.currentId = '';
      state.userId = 0;
      removeLocalStorage('userId');
      removeLocalStorage('currentId');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginMethod.fulfilled, (state, action) => {
        state.currentId = action.payload.id;
        state.userId = action.payload.userId;
        setLocalStorage('currentId', state.currentId);
        setLocalStorage('userId', state.userId);
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

export const { logoutMethod } = authSlice.actions;
export const authReducer = authSlice.reducer;
