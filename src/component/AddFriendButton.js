import React from 'react'
import styles from '../Style/Managebutton.module.css';

function AddFriendButton({onClick}) {
  return (
    <button className={styles.AddButton} onClick={onClick} >
        Add Friend
    </button>
  )
}

export default AddFriendButton