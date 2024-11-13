import React, { useState } from "react";
import styles from "../Style/Sidebar.module.css";
import { ReactComponent as FirstIcon } from "../SidebarIcons/First.svg";
import { ReactComponent as SecondIcon } from "../SidebarIcons/Second.svg";
import { ReactComponent as ThirdIcon } from "../SidebarIcons/Third.svg";
import { ReactComponent as FourthIcon } from "../SidebarIcons/twelve.svg";
import { ReactComponent as FifthIcon } from "../SidebarIcons/Fifth.svg";
import { ReactComponent as SixthIcon } from "../SidebarIcons/ten.svg";
import { ReactComponent as SevenIcon } from "../SidebarIcons/Seventh.svg";
import { ReactComponent as EightIcon } from "../SidebarIcons/Eight.svg";

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
        // justifyContent: "space-evenly",
      }}
    >
      <FirstIcon
        className={`${styles.logo} ${activeIcon === "first" ? styles.clicked : ""}`}
        onClick={() => handleClick("first")}
      />
      <SecondIcon
        className={`${styles.group} ${activeIcon === "second" ? styles.clicked : ""}`}
        onClick={() => handleClick("second")}
      />
      <ThirdIcon
        className={`${styles.logo} ${activeIcon === "third" ? styles.clicked : ""}`}
        onClick={() => handleClick("third")}
      />
      <FourthIcon
        className={`${styles.logo} ${activeIcon === "fourth" ? styles.clicked : ""}`}
        onClick={() => handleClick("fourth")}
      />
      {/* <FifthIcon
        className={`${styles.logo} ${activeIcon === "fifth" ? styles.clicked : ""}`}
        onClick={() => handleClick("fifth")}
      />
      <SixthIcon
        className={`${styles.logo} ${activeIcon === "sixth" ? styles.clicked : ""}`}
        onClick={() => handleClick("sixth")}
      />
      <SevenIcon
        className={`${styles.logo} ${activeIcon === "seven" ? styles.clicked : ""}`}
        onClick={() => handleClick("seven")}
      /> */}
      <EightIcon
        className={`${styles.logo} ${activeIcon === "eight" ? styles.clicked : ""}`}
        onClick={() => handleClick("eight")}
      />
    </div>
  );
}

export default Sidebar;
