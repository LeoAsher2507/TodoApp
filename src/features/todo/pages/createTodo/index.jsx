import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { addTodoMethod } from '../../services/todoThunk';

const CreateTodoPage = () => {
  const [todoName, setTodoName] = useState('');
  const currentId = useSelector((state) => state.auth.currentId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // setListTodo(new)
    const newTodo = {
      name: todoName,
      isDone: false,
      userId: currentId,
      id: Math.random.toString(),
    };
    console.log('value:::', newTodo);
    dispatch(addTodoMethod(newTodo));
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
          <Button>Back to Home</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateTodoPage;