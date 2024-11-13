import React from 'react'
import styles from '../Style/Subheader.module.css';
import AddHeaderText from './AddHeaderText';
import AddManageButton from './AddManageButton';

function AddSubHeader({onLogoClick,onButtonClick}) {
    return (
        <div className={`row ${styles.margin}`}> 
             <div className='col-lg-10 col-md-3 col-5 '>
             <AddHeaderText onLogoClick={onLogoClick} />
            </div>
            {/* <div className='col-lg-8 col-md-4 col-2 '>
              <SearchBar/>
            </div> */}
            <div className='col-lg-2 col-md-4 col-4'>
              <AddManageButton onButtonClick={onButtonClick}/>
            </div> 
            </div> 
      )
}

export default AddSubHeader