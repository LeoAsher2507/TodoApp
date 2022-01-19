import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './features/auth/pages/loginPage';
import RegisterPage from './features/auth/pages/registerPage';
import HomePage from './features/todo/pages/homePage';
import EditTodoPage from './features/todo/pages/editTodo';
import PrivateRoute from './navigation/PrivateRoute';
import { routeList } from './navigation/routes';
import CreateTodoPage from './features/todo/pages/createTodo';
import DetailTodoPage from './features/todo/pages/detailTodo';
import UserProfilePage from './features/todo/pages/userProfile';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={routeList.HOME} element={<PrivateRoute />}>
            <Route path={routeList.HOME} element={<HomePage />}></Route>
            <Route path={routeList.EDIT_TODO} element={<EditTodoPage />}></Route>
            <Route path={routeList.CREATE_TODO} element={<CreateTodoPage />}></Route>
            <Route path={routeList.DETAIL_TODO} element={<DetailTodoPage />}></Route>
            <Route path={routeList.MY_PROFILE} element={<UserProfilePage />}></Route>
          </Route>
          <Route path={routeList.LOGIN} element={<LoginPage />} />
          <Route path={routeList.REGISTER} element={<RegisterPage />} />
          <Route path={routeList.LOGIN} element={<h1>Login Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
