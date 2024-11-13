import React from 'react'
import styles from "../Style/Subheader.module.css";
import logo from "../Images/Sub_header logo.png";

function HeaderText({onLogoClick}) {
  return (
    <div  className={styles.height}>
        <div className={styles.centeredContent}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.image} onClick={onLogoClick}  /> 
        <h6>Manage Requests</h6>
      </div>
      {/* <div className="">
        <h6>Messages</h6>
      </div> */}
      </div>
    </div>
  )
}

export default HeaderText