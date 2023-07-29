
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    
    fetchContacts: (state) => {
 
      const defaultContacts = [
        { id: 1, name: 'John Doe', number: '123456789' },
        { id: 2, name: 'Jane Smith', number: '987654321' },
      ];
      state.contacts = defaultContacts;
    },
  },
});

export const { addContact, deleteContact, setFilter, fetchContacts } = contactsSlice.actions;

export default configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
