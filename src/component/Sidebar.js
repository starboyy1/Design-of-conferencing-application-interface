// Updated Sidebar.js
import React, { useState } from "react";
import styles from "../Style/Sidebar.module.css";
import first from "../SidebarIcons/First.png";
import second from "../SidebarIcons/sec.png";
import third from "../SidebarIcons/third.png";
import fourth from "../SidebarIcons/fourth.png";
import fifth from "../SidebarIcons/fifth.png";
import sixth from "../SidebarIcons/sixth.png";
import seven from "../SidebarIcons/seventh.png";
import eight from "../SidebarIcons/eigth.png";

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null); // State to track the clicked icon

  const handleClick = (iconId) => {
    setActiveIcon(iconId); // Update the active icon on click
  };

  return (
    <div
      style={{
        height: "490px",
        width: "38px",
        borderTop: "1px solid rgba(255, 10, 0, 1)",
        borderRight: "1px solid rgba(255, 10, 0, 1)",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={first}
        alt=""
        className={`${styles.logo} ${activeIcon === "first" ? styles.clicked : ""}`}
        onClick={() => handleClick("first")}
      />
      <img
        src={second}
        alt=""
        className={`${styles.group} ${activeIcon === "second" ? styles.clicked : ""}`}
        onClick={() => handleClick("second")}
      />
      <img
        src={third}
        alt=""
        className={`${styles.logo} ${activeIcon === "third" ? styles.clicked : ""}`}
        onClick={() => handleClick("third")}
      />
      <img
        src={fourth}
        alt=""
        className={`${styles.logo} ${activeIcon === "fourth" ? styles.clicked : ""}`}
        onClick={() => handleClick("fourth")}
      />
      <img
        src={fifth}
        alt=""
        className={`${styles.logo} ${activeIcon === "fifth" ? styles.clicked : ""}`}
        onClick={() => handleClick("fifth")}
      />
      <img
        src={sixth}
        alt=""
        className={`${styles.logo} ${activeIcon === "sixth" ? styles.clicked : ""}`}
        onClick={() => handleClick("sixth")}
      />
      <img
        src={seven}
        alt=""
        className={`${styles.logo} ${activeIcon === "seven" ? styles.clicked : ""}`}
        onClick={() => handleClick("seven")}
      />
      <img
        src={eight}
        alt=""
        className={`${styles.logo} ${activeIcon === "eight" ? styles.clicked : ""}`}
        onClick={() => handleClick("eight")}
      />
    </div>
  );
}

export default Sidebar;
