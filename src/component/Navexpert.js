import React from 'react'
import expert from "../Images/expert.png";
import user from "../Images/Mask group.png";


function Navexpert() {
  return (
    <>       <div className='d-flex'>
             <div className="expert-logo ">
                <img src={expert} alt="expert-logo" />
              </div>
              <div className="text-container">
                <p>Admin</p>
                <p className="subtitle">Medical Expert Center</p>
              </div>
              
              <div className="vertical-line margin"></div>

              <div className="user-logo">
                <img 
                src={user}
                alt=""
                />
              </div>
              </div>
              </>
  )
}

export default Navexpert