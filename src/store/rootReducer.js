import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'; 
import { combineReducers } from 'redux';
import { authReducer } from '../features/auth/services/authSlice';
 
const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});

export const useAppSelector = useSelector;
