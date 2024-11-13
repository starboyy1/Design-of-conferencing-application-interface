import React from "react";
import profilePic from "../Images/Profile.png";
import styles from "./RequestBox.module.css";

function AddProfile() {
  return (
    <div className={styles.requestCard}>
      <img src={profilePic} alt="profile" className={styles.profilePic} />
      <div className={styles.requestInfo}>
        <span className={styles.userName}>name</span>
        <button className={styles.AddButton}>Accept</button>
      </div>
      <div>
        <button className={styles.declineButton}>Decline</button>
      </div>
    </div>
  );
}

export default AddProfile;
