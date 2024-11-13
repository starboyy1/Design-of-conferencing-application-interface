import React from "react";
import profilePic from "../Images/Profile.png";
import styles from "../openChat/header.module.css";
// import Calls from './Calls';
import vedio from "../Images/video.png";
import phone from "../Images/phone 1.png";
import line from "../Images/vertical.png";

function ChatHeader() {
  return (
    <div className={styles.chatContent}>
      <img src={profilePic} alt="profile" className={styles.profilePic} />
      <div className={styles.textContent}>
        <h5 className={styles.userName}>Name</h5>
        <h6 className={styles.messageText}>Online</h6>
      </div>
      <div
        style={{
          marginLeft: "650px",
          border: "1px solid #E0E0E080",
          borderRadius:'6px',
          backgroundColor: "white",
          width: "95.29px",
          height: "40px",
          display: "flex",
          alignItems: "center",

        //   justifyContent:"space-between"
        }}
      >
        <div>
        <img src={vedio} alt="#" className={styles.vedioImg} />
        </div>
        <div className={styles.verticalline}></div>
        <div>
        <img src={phone} alt="#" className={styles.phoneImg} />
        </div>
        
      </div>
      <div>
      <img src={line} alt="#" className={styles.vedioImg} />
      </div>
    </div>
  );
}

export default ChatHeader;
