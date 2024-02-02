import React from 'react'
import './HCard.css'
function HCard(props) {
  return (
    <div className="nam">
        <h2>{props.head}</h2>
        <div className="line"></div>
    </div>
  )
}

export default HCard