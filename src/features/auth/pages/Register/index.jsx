import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigations/routes';
import AuthFormWrap from '../../components/AuthFormWrap';
import { registerMethod } from '../../services/authThunk'; 

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      name,
      email,
      username,
      password,
      confirmPassword,
    };
    console.log('data', data);
    dispatch(registerMethod(data));
  };

  return (
    <div className='register-page'>
      <AuthFormWrap title="Register">
        <Form>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Name'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </Form.Group>

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

          <Form.Group className='mb-3' controlId='confirmPassword'>
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control
              type='password'
              value={confirmPassword}
              placeholder='confirmPassword'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Link to={routeList.LOGIN} className='link-to-register'>
              Đăng nhập
            </Link>
          </div>

          <Button variant='primary' onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </AuthFormWrap>
    </div>
  );
};

export default RegisterPage;
