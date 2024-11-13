import React from 'react'
import styles from '../Style/Managebutton.module.css';

function Managebutton({onButtonClick}) {
  return (
    
    <button className={styles.manageButton} onClick={onButtonClick}>
        Manage Requests
    </button>
  )
}

export default Managebutton