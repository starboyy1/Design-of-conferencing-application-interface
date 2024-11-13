import React from 'react'
import Send from '../Images/send.png'
import styles from './ChatInputBar.module.css';

function Sendicon() {
  return (
  <img
  className={styles.iconSend}
  src={Send}
  alt=''
  />
  )
}

export default Sendicon