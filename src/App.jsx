import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './features/auth/pages/Login';
import HomePage from './features/todo/pages/HomePage';
import PrivateRoute from './navigations/PrivateRoute';
import { routeList } from './navigations/routes';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={routeList.HOME} element={<PrivateRoute />}>
            <Route path={routeList.HOME} element={<HomePage />} />
          </Route>
          <Route path={routeList.LOGIN} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
