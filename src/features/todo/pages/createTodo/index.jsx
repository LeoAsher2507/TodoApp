import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
=======
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { getLocalStorage } from '../../../../services/localStorage';
>>>>>>> LeoAsher
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { addTodoMethod } from '../../services/todoThunk';

const CreateTodoPage = () => {
  const [todoName, setTodoName] = useState('');
<<<<<<< HEAD
  const currentId = useSelector((state) => state.auth.currentId);
=======
  const userId = getLocalStorage('userId');
>>>>>>> LeoAsher
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
<<<<<<< HEAD
    // setListTodo(new)
    const newTodo = {
      name: todoName,
      isDone: false,
      userId: currentId,
      id: Math.random.toString(),
    };
    console.log('value:::', newTodo);
    dispatch(addTodoMethod(newTodo));
=======
    if (todoName.trim()) {
      const newTodo = {
        name: todoName,
        isDone: false,
        userId,
      };

      dispatch(addTodoMethod(newTodo));
      navigate(routeList.HOME);
    }
  };

  const handleBackToHome = () => {
>>>>>>> LeoAsher
    navigate(routeList.HOME);
  };

  return (
    <div>
      <Card className='container-wrap'>
        <Card.Title>Create todo</Card.Title>

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
export default CreateTodoPage;
=======
export default CreateTodoPage;
>>>>>>> LeoAsher
