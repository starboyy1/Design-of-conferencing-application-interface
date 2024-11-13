import React from 'react'
import HeaderText from './HeaderText'
import SearchBar from './Searchbar'
import Managebutton from './Managebutton'
import styles from '../Style/Subheader.module.css';

function Subheader({onButtonClick,onLogoClick}) {
  return (
    <div className={`row ${styles.margin}`}> 
         <div className='col-lg-2 col-md-3 col-5 '>
         <HeaderText onLogoClick={onLogoClick}/>
        </div>
        <div className='col-lg-8 col-md-4 col-2 '>
          <SearchBar/>
        </div>
        <div className='col-lg-2 col-md-4 col-4'>
          <Managebutton onButtonClick={onButtonClick}/>
        </div> 
        </div> 
  )
}

export default Subheader