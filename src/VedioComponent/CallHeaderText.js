import React from 'react'
import styles from "../Style/Subheader.module.css";
import logo from "../Images/Sub_header logo.png";


function CallHeaderText() {
    return (
        <div  className={styles.height}>
            <div className={styles.centeredContent}>
          <div className={styles.logo}>
            <img src={logo} alt="logo"  className={styles.image}  />
            <h6>Vedio Call</h6>
          </div>
          {/* <div className="">
            <h6>Messages</h6>
          </div> */}
          </div>
        </div>
      );
}

export default CallHeaderText