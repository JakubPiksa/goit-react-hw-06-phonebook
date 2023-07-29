import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/store'; // Poprawiona ścieżka importu
import css from './filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts by name"
      className={css.input}
    />
  );
};

export default Filter;