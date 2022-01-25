import React, { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { logoutMethod } from '../../../auth/services/authSlice';
import { getUserInfoMethod } from '../../../auth/services/authThunk';
import { deleteTodoMethod, getAllTodoMethod } from '../../services/todoThunk';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {}, []);

  const dispatch = useDispatch();

  // name, isDone, userId, id
  const todoList = useSelector((state) => state.todo.todoList);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutMethod());
    navigate(routeList.LOGIN);
  };

  const handleEdit = (todo) => {
    navigate(routeList.EDIT_TODO, { state: todo });
  };

  const handleAddTodo = () => {
    navigate(routeList.CREATE_TODO);
  };

  const handleView = () => {
    navigate(routeList.DETAIL_TODO);
  };

  const handleEditProfile = () => {
    navigate(routeList.MY_PROFILE);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoMethod(id));
  };

  const handleIsDoneChange = (e) => {};
  const {userId, userInfo} = useSelector((state) => state.auth);
  console.log('userInfo1',userInfo);

  useEffect(() => {
    dispatch(getAllTodoMethod());
    dispatch(getUserInfoMethod(userId));
  }, [dispatch]);

  return (
    <div className='home-page'>
      <div className='container-wrap'>
        <Card className='user-info'>
          <Card.Title className='card-title'>
            <div className='title'>User Information</div>
            <Button
              className='logout-btn'
              variant='primary'
              onClick={() => handleLogout()}>
              Logout
            </Button>
          </Card.Title>

          <Card.Body>
            <div className='user-info-body'>
              <div className='user-name'>Name: Ahihi</div>

              <Button variant='primary' onClick={() => handleEditProfile()}>
                Profile
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='todo-list'>
          <Card.Title className='card-title'>
            <div className='title'>Todo App with Redux</div>
            <Button
              className='btn'
              variant='primary'
              onClick={() => handleAddTodo()}>
              Add Todo
            </Button>
          </Card.Title>

          <Card.Body>
            <ListGroup>
              {todoList.map((todo) => (
                <ListGroup.Item key={todo.id} className='todo-item'>
                  <div className='todo-content'>
                    <div className='is-done'>
                      <input
                        type='checkbox'
                        name='isDone'
                        id='is-done'
                        onChange={(e) => handleIsDoneChange()}
                        checked={todo.isDone}
                      />
                    </div>
                    <div className='todo-name'>{todo.name}</div>
                  </div>
                  <div className='action-btn'>
                    <Button
                      className='btn'
                      variant='primary'
                      onClick={() => handleEdit(todo)}>
                      Edit
                    </Button>
                    <Button
                      className='btn'
                      variant='primary'
                      onClick={() => handleView()}>
                      View
                    </Button>
                    <Button
                      className='btn'
                      variant='primary'
                      onClick={() => handleDeleteTodo(todo.id)}>
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
