import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/ContactList/contactsSlice';
import filterReducer from './components/Filter/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;