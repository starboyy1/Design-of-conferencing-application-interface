import React from 'react'
import { ReactComponent as Accept } from './Logo/Accepticon.svg';

function Accepticon() {
  return (
    <Accept
    style={{
        width:'60px',
        height:'60px',
        marginRight:'15px',
        marginLeft:'15px'
    }}
    src={Accept}
    alt='accept'
    />
  )
}

export default Accepticon