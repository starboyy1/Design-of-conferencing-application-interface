import React from "react";
import profilePic from "../Images/Profile.png"; // Replace with actual profile picture path
import styles from "../Style/Chatcomponent.module.css";

function MessageCard() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.chatBox}>
        <div className={styles.chatContent}>
          <img src={profilePic} alt="profile" className={styles.profilePic} />
          <div className={styles.textContent}>
            <h5 className={styles.userName}>Name</h5>
            <h6 className={styles.messageText}>hello i am name</h6>
          </div>
        </div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatContent}>
          <img src={profilePic} alt="profile" className={styles.profilePic} />
          <div className={styles.textContent}>
            <h5 className={styles.userName}>Name</h5>
            <h6 className={styles.messageText}>hello i am name</h6>
          </div>
        </div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatContent}>
          <img src={profilePic} alt="profile" className={styles.profilePic} />
          <div className={styles.textContent}>
            <h5 className={styles.userName}>Name</h5>
            <h6 className={styles.messageText}>hello i am name</h6>
          </div>
        </div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatContent}>
          <img src={profilePic} alt="profile" className={styles.profilePic} />
          <div className={styles.textContent}>
            <h5 className={styles.userName}>Name</h5>
            <h6 className={styles.messageText}>hello i am name</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
