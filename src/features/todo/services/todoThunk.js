import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApiMethod } from '../api';

export const addTodoMethod = createAsyncThunk(
  'todo/addTodoMethod',
<<<<<<< HEAD
  async (data) => {
    //data => newTodo
    try {
      // const response = await todoApiMethod.addTodo(data); /// goi toi api
      // console.log('response add ', response);
      return data;
    } catch (error) {
      return error;
=======
  async (data, thunkApi) => {
    try {
      const response = await todoApiMethod.addTodo(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
>>>>>>> LeoAsher
    }
  }
);

export const editTodoMethod = createAsyncThunk(
  'todo/editTodoMethod',
<<<<<<< HEAD
  async (data) => {
    //data => newTodo
    try {
      // const response = await todoApiMethod.editTodo(data); /// goi toi api
      // console.log('response add ', response);
      return data;
    } catch (error) {
      return error;
=======
  async (data, thunkApi) => {
    try {
      const response = await todoApiMethod.editTodo(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
>>>>>>> LeoAsher
    }
  }
);

export const deleteTodoMethod = createAsyncThunk(
  'todo/deleteTodoMethod',
<<<<<<< HEAD
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
=======
  async (id, thunkApi) => {
    try {
      const response = await todoApiMethod.deleteTodo(id); /// goi toi api 
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const getAllTodoMethod = createAsyncThunk(
  'todo/getAllTodoMethod',
  async (_, thunkApi) => {
    try {
      const response = await todoApiMethod.getAllTodo();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
>>>>>>> LeoAsher
