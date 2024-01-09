import React from 'react';

import css from './header.module.css';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <h1>Welcome to your Phonebook </h1>
    </div>
  );
};

export default Header;
