import React, { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { removeLocalStorage } from '../../../../services/localStorage';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => { 
  }, []);

  // name, isDone, userId, id
  const todoList = [
    {
      id: '1',
      userId: '2',
      name: 'Todo 1',
      isDone: false
    },
    {
      id: '22',
      userId: '3',
      name: 'Todo 2',
      isDone: true
    }
  ]

  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage('currentId');
    navigate(routeList.LOGIN);
  };

  const handleEdit = (todo) => {
    navigate(routeList.EDIT_TODO, {state:  todo })
  }

  const handleAddTodo = () => {
    navigate(routeList.CREATE_TODO)
  }

  const handleView = () => {
    navigate(routeList.DETAIL_TODO)
  }

  const handleEditProfile = () => {
    navigate(routeList.MY_PROFILE)
  }

  const handleDeleteTodo = () => {
    // 
  }

  const handleIsDoneChange = (e) => {
    
  } 


  return (
    <div className='home-page'> 
      <div className="container-wrap">
        <Card className='user-info'>
          <Card.Title className="card-title">
            <div className="title">
              User Information
            </div>
            <Button className="logout-btn" variant='primary' onClick={() => handleLogout()}>Logout</Button>
          </Card.Title>

          <Card.Body>
            <div className="user-info-body">
              <div className="user-name">Name: Ahihi</div>

              <Button variant='primary' onClick={() => handleEditProfile()} >Profile</Button>
            </div>

          </Card.Body>
        </Card>

        <Card>
          <Card.Title  className="card-title">
            <div className="title">
              Todo App with Redux 
            </div>
            <Button className="btn" variant='primary'  onClick={() => handleAddTodo()} >Add Todo</Button>
          </Card.Title>
          <Card.Body>
            <ListGroup>
              {
                todoList.map(item => (
                  <ListGroup.Item key={item.id} className='todo-item'>
                    <div className="todo-content">
                      <div className="is-done">
                        <input type="checkbox" name="isDone" id="is-done" onChange={(e) => handleIsDoneChange()} checked={item.isDone} />
                      </div>
                      <div className="todo-name">
                        {item.name} 
                      </div>
                    </div>
                    <div className="action-btn">
                      <Button className="btn" variant='primary'  onClick={() => handleEdit(item)}>Edit</Button  >
                      <Button className="btn" variant='primary'  onClick={() => handleView()} >View</Button >
                      <Button className="btn" variant='primary'  onClick={() => handleDeleteTodo()} >Delete</Button >
                    </div>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
