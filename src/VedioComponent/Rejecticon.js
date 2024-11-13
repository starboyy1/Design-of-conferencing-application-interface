import React from 'react'
import { ReactComponent as Decline } from './Logo/Declineicon.svg';

function Rejecticon() {
  return (
    
    <Decline
    style={{
        width:'60px',
        height:'60px'
    }}
    src={Decline}
    alt='Reject'
    
    />
  )
}

export default Rejecticon