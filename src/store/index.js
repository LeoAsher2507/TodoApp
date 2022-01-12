import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authReducer } from '../features/auth/services/authSlice/index';

const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});
