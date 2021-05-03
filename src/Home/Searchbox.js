import React from 'react';
import styles from './Search.module.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className={styles.S}>
     
      <input
        className={styles.search}
        type='search'
        placeholder='Search'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;