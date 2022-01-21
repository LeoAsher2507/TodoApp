import { createSlice } from '@reduxjs/toolkit';
import { addTodoMethod, editTodoMethod } from './todoThunk';

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
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoMethod.fulfilled, (state, action) => {
        console.log('vo slice', action.payload);
        state.todoList = [action.payload, ...state.todoList]; //destructuring
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        const index = state.todoList.findIndex(
          (todo) => todo.id === action.payload.id
        );
        console.log('vo slice edit', action.payload, index);
        state.todoList[index] = action.payload;
      });
  },
});
export const todoReducer = todoSlice.reducer;
