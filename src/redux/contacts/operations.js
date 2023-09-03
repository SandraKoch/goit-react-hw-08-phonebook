import axios from 'axios';

const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addingInProgress,
  addingSuccess,
  addingError,
  deletingInProgress,
  deletingSuccess,
  deletingError,
} = require('./contactsSlice');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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

export const deleteContact = contactId => async dispatch => {
  try {
    dispatch(deletingInProgress());

    await axios.delete(`/contacts/${contactId}`);
    dispatch(deletingSuccess(contactId));
  } catch (error) {
    dispatch(deletingError(error.message));
  }
};
