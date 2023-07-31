import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useDispatch } from 'react-redux';
import { setContacts } from '../store/reducers/contacts';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Odczytanie danych z local storage przy załadowaniu aplikacji
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts))); // Ustawienie danych z local storage za pomocą akcji Redux
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
