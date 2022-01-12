import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigations/routes';
import { setLocalStorage } from '../../../../services/localStorage';
import { loginMethod } from '../../services/authThunk';

import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLocalStorage('token', 'Ahihi');
    
  };

  const handleSubmit = () => {
    const data = {
      username,
      password,
    };
    console.log('data', data);
    navigate(routeList.HOME);
    dispatch(loginMethod(data));
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-page'>
      <Form>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter username'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
