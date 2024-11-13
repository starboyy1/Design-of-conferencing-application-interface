// SearchBar.js
import React from 'react';
import styles from '../Style/Searchbar.module.css';
import user from '../Images/search-logo.png'; 

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img src={user} alt="search" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
