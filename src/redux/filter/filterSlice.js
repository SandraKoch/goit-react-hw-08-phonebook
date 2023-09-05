const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = initializeFilterFromLS();

function initializeFilterFromLS() {
  const filterFromLS = localStorage.getItem('My-Filter');

  try {
    const parsedFilter = JSON.parse(filterFromLS) || '';
    return parsedFilter;
  } catch (error) {
    console.log('filter error', error.message);
    return '';
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      const myFilter = action.payload;
      localStorage.setItem('My-Filter', JSON.stringify(myFilter));
      return (state = myFilter);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
