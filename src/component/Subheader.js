import React from 'react'
import HeaderText from './HeaderText'
import SearchBar from './Searchbar'
import Managebutton from './Managebutton'
import styles from '../Style/Subheader.module.css';
import AddFriendButton from './AddFriendButton';

function Subheader({onButtonClick,onLogoClick,onClick}) {
  return (
    <div className={`row ${styles.margin}`}> 
         <div className='col-lg-2 col-md-3 col-5 '>
         <HeaderText onLogoClick={onLogoClick}/>
        </div>
        <div className='col-lg-7 col-md-4 col-2 '>
          <SearchBar/>
        </div>
        <div className='col-lg-1 col-md-4 col-4'
        style={{
          marginRight:'20px'
        }}>
          <AddFriendButton onClick={onClick}/>
          </div>
          <div className='col-lg-1'>
          <Managebutton onButtonClick={onButtonClick}/>
          
        </div> 
        </div> 
  )
}

export default Subheader