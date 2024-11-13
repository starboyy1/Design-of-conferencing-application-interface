import React from "react";
// import logo from "../Images/Group 212.png";
// import notification from "../Images/notification.png";
// import setting from "../Images/Setting.png";
// import expert from "../Images/expert.png";
// import user from "../Images/Mask group.png";
import "../Style/Navbar.css";
import Navbarlogo from "./Navbarlogo";
import NavSetting from "./NavSetting";
import Navexpert from "./Navexpert";

function Navbar() {
  return (
    <>
      <div className="container-fluid height bg-primary py-1">
        <div className="d-flex align-items-center">
          <div className=" col-lg-9 col-md-1 col-1">
            <Navbarlogo />
          </div>
          <div className="">
            <NavSetting />
          </div>

          <div className="">
            <Navexpert />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
