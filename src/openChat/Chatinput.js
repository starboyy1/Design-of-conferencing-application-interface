// ChatMessages.js
import React from 'react';
import profilePic from '../Images/Profile.png';
import styles from './ChatMessages.module.css';

function ChatMessages() {
  return (
    <div className={styles.chatMessagesContainer}>
      <div className={styles.message}>
        <img src={profilePic} alt="profile" className={styles.profilePic} />
        <div>
          <span className={styles.timestamp}>09:25 AM</span>
          <p className={styles.messageText}>Hello! Mike, how are you?</p>
        </div>
      </div>
      <div className={styles.message}>
        <img src={profilePic} alt="profile" className={styles.profilePic} />
        <div>
          <span className={styles.timestamp}>09:29 AM</span>
          <p className={styles.messageText}>What's going on. Hope you're doing well!</p>
        </div>
      </div>
      <div className={styles.myMessage}>
      <span className={styles.timestamp}>09:40 AM</span>
        <p className={styles.messageText}>Hi John, I'm good!</p>
        
      </div>
      <div className={styles.myMessage}>
      <span className={styles.timestamp}>09:45 AM</span>
        <p className={styles.messageText}>Yes, tell me... I was waiting for your reply.</p>
        
      </div>

      
      
    </div>
  );
}

export default ChatMessages;
