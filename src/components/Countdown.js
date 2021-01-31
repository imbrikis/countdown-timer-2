import React from 'react'
import './Countdown.css'

const Countdown = ({ countdownDate }) => {
  return (
    <div className="countdown">{countdownDate}</div>
  )
}

export default Countdown
