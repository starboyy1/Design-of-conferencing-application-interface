import React from 'react'
import styles from '../Style/Managebutton.module.css';

function Button({onAddFriend}) {
  return (
    <button className={styles.manageButton} onClick={onAddFriend}>
        Add Friend
    </button>
  )
}

export default Button