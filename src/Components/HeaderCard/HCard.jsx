import React from 'react'
import './HCard.css'
function HCard(props) {
  return (
    <>
    <div className="nam">
        <h2>{props.head} <br /><div className="line"></div></h2>
        
    </div>
    <br />
    </>
  )
}

export default HCard