import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { editTodoMethod } from '../../services/todoThunk';

const EditTodoPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState(state.name);
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
    dispatch(editTodoMethod(editedTodo));
    navigate(routeList.HOME);
  };

  return (
    <div>
      <Card className='container-wrap'>
        <Card.Title>Edit todo</Card.Title>

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

export default EditTodoPage;
