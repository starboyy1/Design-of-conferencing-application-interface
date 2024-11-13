import React from "react";
import styles from "./RequestBox.module.css";

function AddRequest({onClick}) {
  return <span className={styles.tab} onClick={onClick}>Add Request</span>;
}

export default AddRequest;
