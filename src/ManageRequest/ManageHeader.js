import React from 'react'
import HeaderText from './HeaderText'
import Button from './Button'
import styles from './ManageHeader.module.css'

function ManageHeader({onButtonClick,onAddFriend,onLogoClick}) {
  return (
    <>
    <div className={`row ${styles.margin}`}>
    <div className='col-lg-10 col-md-8 col-8'>
    <HeaderText onLogoClick={onLogoClick} />
    </div>
    <div className=' col-lg-2 col-md-4 col-4' >
    <Button onButtonClick={onButtonClick} onAddFriend={onAddFriend}/>
    </div>
    </div>
    </>
    
  )
}

export default ManageHeader