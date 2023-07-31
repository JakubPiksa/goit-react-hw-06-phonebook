import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';

const App = () => {
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