import React from 'react';

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'; 
import { getLocalStorage } from '../services/localStorage';
import { routeList } from './routes';

const PrivateRoute = () => {
  const currentId = getLocalStorage('currentId') 
  return currentId ? <Outlet /> : <Navigate to={routeList.LOGIN} />;
};

export default PrivateRoute;
