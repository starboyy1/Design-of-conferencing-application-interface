import React from 'react'
import styles from '../Style/Subheader.module.css';
import CallHeaderText from './CallHeaderText';

function CallHeader() {
    return (
        <div className={`row ${styles.margin}`}> 
             <div className='col-lg-10 col-md-3 col-5 '>
             <CallHeaderText/>
            </div>
            </div> 
      )
}

export default CallHeader