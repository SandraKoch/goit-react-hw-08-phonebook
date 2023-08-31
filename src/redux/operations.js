import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addingInProgress,
  addingSuccess,
  addingError,
} = require('./contactsSlice');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export const addNewContact =
  ({ name, number }) =>
  async dispatch => {
    try {
      dispatch(addingInProgress());

      const newContact = {
        name,
        number,
      };
      await axios.post('/contacts', newContact);
      dispatch(addingSuccess(newContact));
    } catch (error) {
      dispatch(addingError(error.message));
    }
  };

// auth operations

export const register = createAsyncThunk(
  'auth/register',
  async (registerData, thunkAPI) => {
    const payload = {
      name: registerData.user,
      email: registerData.email,
      password: registerData.password,
    };

    try {
      const response = await axios.post('/users/signup', payload);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (cred, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', cred);
    setAuthHeader(res.data.token);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk(
  'auth/logout',
  async (cred, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout', cred);
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messages);
    }
  }
);
