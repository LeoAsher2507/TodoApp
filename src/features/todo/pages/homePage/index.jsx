import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigations/routes';
import { removeAccessToken } from '../../../../services/localStorage';

const HomePage = () => {
  useEffect(() => { 
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate(routeList.LOGIN);
  };
  return (
    <div>
      <h1>this is Hone Page</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default HomePage;
