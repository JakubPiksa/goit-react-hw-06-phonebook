import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useDispatch } from 'react-redux';
import { setContacts } from '../store/reducers/contacts';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className={css.container}>
        <Header />
        <h2 className={css.form}>Add new contact</h2>
        <ContactForm />
        <h2 className={css.form}>Search Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
