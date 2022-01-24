import React from 'react';
import { Card, Button, Form } from 'react-bootstrap'
import './AuthFormWrap.css'

const AuthFormWrap = (props) => {
  const { cardTitle, handleSubmit, children } = props;

  return(
      <Card className = 'auth-form_wrap'>
          <Card.Body>
              <Card.Title className='title'>{cardTitle}</Card.Title>

              <Form onSubmit={(e) => handleSubmit(e)}>
                  {children}
                  <div className="action">
                      <Button variant='primary' onClick={(e) => handleSubmit(e)}>
                          {cardTitle}
                      </Button>
                  </div>

              </Form>
          </Card.Body>
      </Card>
  )
};

export default AuthFormWrap;
