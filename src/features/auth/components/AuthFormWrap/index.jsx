import React from 'react';
import { Card } from 'react-bootstrap';
import './AuthFormWrap.css';

const AuthFormWrap = (props) => {
  const { children, title } = props;

  return (
    <Card className='auth-form-wrap'>
      <Card.Body>
        <Card.Title className='title'>{title} </Card.Title>
        { children }
      </Card.Body>
    </Card>
  );
};

export default AuthFormWrap;
