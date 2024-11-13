import React from 'react'
import styles from './RequestBox.module.css'

function SendRequest({onClick}) {
  return (
    <span className={styles.tab} onClick={onClick}>Send Request</span>
  )
}

export default SendRequest