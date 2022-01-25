import { createSlice } from '@reduxjs/toolkit';
import {
  addTodoMethod,
  deleteTodoMethod,
  editTodoMethod,
  getAllTodoMethod,
} from './todoThunk';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoMethod.fulfilled, (state, action) => {
        // state.todoList = [action.payload, ...state.todoList]; //destructuring
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        // const index = state.todoList.findIndex(
        //   (todo) => todo.id === action.payload.id
        // );
        // state.todoList[index] = action.payload;
      })
      .addCase(deleteTodoMethod.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.payload
        );
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
