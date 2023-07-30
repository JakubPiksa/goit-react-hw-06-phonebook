// store.jsx

import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    // Pobieramy rzeczywiste dane kontaktów z serwera za pomocą fetch
    const response = await fetch('/api/contacts');
    const data = await response.json();

    // Zwracamy dane, które zostaną automatycznie zapisane do stanu przez Redux Toolkit
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
});

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
  },
  extraReducers: (builder) => {
    // Obsługujemy sukces pobierania danych kontaktów za pomocą createAsyncThunk
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
    // Obsługujemy błędy pobierania danych kontaktów
    builder.addCase(fetchContacts.rejected, (state, action) => {
      console.error('Error fetching contacts:', action.error);
    });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export { fetchContacts }; // Współdzielimy akcję fetchContacts, aby użyć jej w komponencie App

export default configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
