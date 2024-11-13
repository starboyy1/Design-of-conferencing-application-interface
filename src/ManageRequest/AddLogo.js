import React from 'react'
import Add from '../Images/Add Logo.png';
import styles from './AddLogo.module.css';


function AddLogo() {
    return (
        <div className={styles.chatMessagesContainer}>
          <img 
            src={Add}
            alt='#'
            className={styles.image}

          />
          
          
        </div>
      );
}

export default AddLogo
