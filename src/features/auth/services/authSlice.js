import { createSlice } from '@reduxjs/toolkit';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../../services/localStorage';
import { getUserInfoMethod, loginMethod, registerMethod, changePasswordMethod } from './authThunk';

const initialState = {
  userId: getLocalStorage('userId'),
  currentId: getLocalStorage('currentId'),
  userInfo: {
    createdAt: "",
    email: "",
    emailVerified: null,
    id: 0,
    isAdmin: 0,
    name: "",
    realm: null,
    updatedAt: "",
    username: ""
  }
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
      })
      .addCase(getUserInfoMethod.fulfilled, (state, action) => {
        state.userInfo = {...action.payload}
        // console.log(action.payload)
      })
      .addCase(getUserInfoMethod.rejected, (state, action) => {
        console.log('reject get user info');
      })
      .addCase(changePasswordMethod.fulfilled, (state, action) => {
        console.log('Change password successfully');
      })
      .addCase(changePasswordMethod.rejected, (state, action) => {
        console.log('reject change password');
      })
  },
});

export const { logoutMethod } = authSlice.actions;
export const authReducer = authSlice.reducer;
