import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
=======
import { useLocation, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { getLocalStorage } from '../../../../services/localStorage';
>>>>>>> LeoAsher
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { editTodoMethod } from '../../services/todoThunk';

const EditTodoPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState(state.name);
<<<<<<< HEAD
  const currentId = useSelector((state) => state.auth.currentId);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // setListTodo(new)
    const editedTodo = {
      name: todoName,
      isDone: state.isDone,
      userId: currentId,
      id: state.id,
    };
    console.log('value:::', editedTodo);
=======
  const userId = getLocalStorage('userId');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const editedTodo = {
      name: todoName,
      isDone: state.isDone,
      userId,
      id: state.id,
    };
    console.log('tetsssss', editedTodo);
>>>>>>> LeoAsher
    dispatch(editTodoMethod(editedTodo));
    navigate(routeList.HOME);
  };

<<<<<<< HEAD
=======
  const handleBackToHome = () => {
    navigate(routeList.HOME);
  };

>>>>>>> LeoAsher
  return (
    <div>
      <Card className='container-wrap'>
        <Card.Title>Edit todo</Card.Title>

        <Card.Body>
          <CreateEditTodoForm todoName={todoName} setTodoName={setTodoName} />
        </Card.Body>

        <Card.Footer>
<<<<<<< HEAD
          <Button>Back to Home</Button>
=======
          <Button onClick={handleBackToHome}>Back to Home</Button>
>>>>>>> LeoAsher
          <Button onClick={handleSubmit}>Save</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

<<<<<<< HEAD
export default EditTodoPage;
=======
export default EditTodoPage;
>>>>>>> LeoAsher
