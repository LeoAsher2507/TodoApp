import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigations/routes';
import { removeLocalStorage } from '../../../../services/localStorage';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage('token');
    navigate(routeList.LOGIN);
  };
  return (
    <div>
      Home Page
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default HomePage;
