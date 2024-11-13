import React, { useState } from "react";
import styles from "./RequestBox.module.css";
import AddRequest from "./AddRequest";
import SendRequest from "./SendRequest";
import RequestProfile from "./RequestProfile";
import AddProfile from "./AddProfile";

function RequestBox() {
  // State to control which component to show
  const [showAddProfile, setShowAddProfile] = useState(false);

  // Handle the click to show AddProfile
  const handleAddProfile = () => {
    setShowAddProfile(true);  // Show AddProfile component
  };

  // Handle the click to show RequestProfile
  const handleRequestProfile = () => {
    setShowAddProfile(false); // Show RequestProfile component
  };

  return (
    <>
      <div className={styles.requestsContainer}>
        <div className={styles.header}>
          <AddRequest onClick={handleAddProfile} /> {/* Show AddProfile on click */}
          <SendRequest onClick={handleRequestProfile} /> {/* Show RequestProfile on click */}
        </div>

        {/* Conditionally render based on showAddProfile state */}
        {showAddProfile ? <AddProfile /> : <RequestProfile />}
      </div>
    </>
  );
}

export default RequestBox;
