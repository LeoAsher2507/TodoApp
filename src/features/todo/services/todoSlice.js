import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { addTodoMethod, deleteTodoMethod, editTodoMethod } from './todoThunk';

const initialState = {
  todoList: [
    {
      id: '1',
      userId: '2',
      name: 'Todo 1',
      isDone: false,
    },
    {
      id: '2',
      userId: '3',
      name: 'Todo 2',
      isDone: true,
    },
    {
      id: '3',
      userId: '4',
      name: 'Todo 4 ',
      isDone: true,
    },
  ],
=======
import {
  addTodoMethod,
  deleteTodoMethod,
  editTodoMethod,
  getAllTodoMethod,
} from './todoThunk';

const initialState = {
  todoList: [],
>>>>>>> LeoAsher
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoMethod.fulfilled, (state, action) => {
<<<<<<< HEAD
        console.log('vo slice', action.payload);
        state.todoList = [action.payload, ...state.todoList]; //destructuring
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        const index = state.todoList.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.todoList[index] = action.payload;
=======
        // state.todoList = [action.payload, ...state.todoList]; //destructuring
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        // const index = state.todoList.findIndex(
        //   (todo) => todo.id === action.payload.id
        // );
        // state.todoList[index] = action.payload;
>>>>>>> LeoAsher
      })
      .addCase(deleteTodoMethod.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.payload
        );
<<<<<<< HEAD
      });
  },
});
export const todoReducer = todoSlice.reducer;
=======
      })
      .addCase(getAllTodoMethod.fulfilled, (state, action) => {
        state.todoList = action.payload.data;
      })
      .addCase(getAllTodoMethod.rejected, (state, action) => {
        console.log('Get all error: ', action.payload.data.error.message);
      });
  },
});
export const todoReducer = todoSlice.reducer;
>>>>>>> LeoAsher
