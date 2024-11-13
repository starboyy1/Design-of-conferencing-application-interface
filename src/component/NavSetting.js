import React from 'react'
import notification from "../Images/notification.png";
import setting from "../Images/Setting.png";
import "../Style/Navbar.css";

function NavSetting() {
  return (
    <div className='d-flex'>
    <div className="mx-3">
    <img src={notification} alt="Notification Icon" />
  </div>
  <div>
    <img
      src={setting}
      alt="Settings Icon"
      width="16.2px"
      height="16.04px"
    />
  </div>
  <div className="vertical-line "></div>
  </div>
  
  )
}

export default NavSetting