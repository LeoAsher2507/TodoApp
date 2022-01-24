import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApiMethod } from '../api';

export const addTodoMethod = createAsyncThunk(
  'todo/addTodoMethod',
  async (data) => {
    //data => newTodo
    try {
      // const response = await todoApiMethod.addTodo(data); /// goi toi api
      // console.log('response add ', response);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const editTodoMethod = createAsyncThunk(
  'todo/editTodoMethod',
  async (data) => {
    //data => newTodo
    try {
      // const response = await todoApiMethod.editTodo(data); /// goi toi api
      // console.log('response add ', response);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteTodoMethod = createAsyncThunk(
  'todo/deleteTodoMethod',
  async (data) => {
    //data => newTodo
    try {
      // const response = await todoApiMethod.deleteTodo(data); /// goi toi api
      // console.log('response add ', response);
      return data;
    } catch (error) {
      return error;
    }
  }
);