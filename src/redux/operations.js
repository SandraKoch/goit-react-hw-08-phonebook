import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = require('./contactsSlice');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
