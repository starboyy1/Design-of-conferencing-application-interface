import React from 'react';
import ProfileLogo from './ProfileLogo';
import Accepticon from './Accepticon';
import Rejecticon from './Rejecticon';
import styles from './profile.module.css';
import UserCamera from './UserCamera';

function VedioChat() {
  return (
    <div className={`col-lg-11 col-md-11 col-9 ${styles.vedioChatContainer}`}>
      <ProfileLogo />
      <div className={styles.icon}>
        <Accepticon />
        <Rejecticon />
      </div>
      <div className={styles.userCamera}>
        <UserCamera />
      </div>
    </div>
  );
}

export default VedioChat;
