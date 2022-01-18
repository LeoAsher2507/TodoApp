import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from '../services/localStorage';
import { routeList } from './routes';

const PrivateRoute = () => {
  const token = getAccessToken();
  console.log("test111", token)

  return token ? <Outlet /> : <Navigate to={routeList.LOGIN} />;
};

export default PrivateRoute;
