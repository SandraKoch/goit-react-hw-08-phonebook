import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = require('./contactsSlice');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const fetchTasks = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
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
