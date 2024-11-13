import React from 'react'
import styles from './Search.module.css';
import user from '../Images/search-logo.png'; 

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <img src={user} alt="search" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      />
      
    </div>
  )
}

export default SearchBar