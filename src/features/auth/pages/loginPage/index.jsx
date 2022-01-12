import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import AuthFormWrap from '../../components/AuthFormWrap';
import { loginMethod } from '../../services/authThunk';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e) => {
    const data = {
      username,
      password,
    };
    dispatch(loginMethod(data));
    navigate('/');
  };

  const handleUserOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login-page'>
      <AuthFormWrap cardTitle='Đăng nhập' handleSubmit={handleLogIn}>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required={true}
            type='name'
            placeholder='Enter username'
            value={username}
            onChange={handleUserOnChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required={true}
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordOnChange}
          />
        </Form.Group>

        <div className='forget-password'>
          <Link to={routeList.RECOVER_PASSWORD}> Quên mật khẩu </Link>
        </div>
        <div className='register'>
          <Link to={routeList.REGISTER}> Đăng ký </Link>
        </div>
      </AuthFormWrap>
    </div>
  );
};

export default LoginPage;
