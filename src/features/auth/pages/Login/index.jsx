import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigations/routes';
import { setLocalStorage } from '../../../../services/localStorage';
import AuthFormWrap from '../../components/AuthFormWrap';
import { loginMethod } from '../../services/authThunk';
 

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <AuthFormWrap title="Login" >
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

          <div>
            <Link to={routeList.REGISTER} className='link-to-register'>
              Đăng ký
            </Link>
          </div>

          <Button
            className='btn'
            variant='primary'
            onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </AuthFormWrap>
    </div>
  );
};

export default LoginPage;
