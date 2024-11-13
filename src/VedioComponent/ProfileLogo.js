import React from 'react'
import profile from '../Images/Profilelogo.png'
import styles from './profile.module.css'
function ProfileLogo() {
  return (
    <div className={styles.profile} >
        <div>
        <img
        src={profile}
        alt='#'
        className={styles.image}
        
        />
        </div>
       
        <div>
            <h5>Name</h5>
        </div>
        <h6>Ringing</h6>
    </div>
  )
}

export default ProfileLogo