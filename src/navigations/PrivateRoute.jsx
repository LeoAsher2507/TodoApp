import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';
import { routeList } from './routes';

const PrivateRoute = () => {
  const token = getLocalStorage('token');
  return token ? <Outlet /> : <Navigate to={routeList.LOGIN} />;
};

export default PrivateRoute;
