import React from 'react'
import './Countdown.css'
import Timer from './Timer'

const Countdown = ({ titleInput, dateInput }) => {

  return (
    <div className="countdown">
      <Timer dateInput={dateInput} />
      <div className="countdown-title">{titleInput}</div>
      <div className="date-description">({new Date(dateInput).toLocaleString()})</div>
    </div>
  )
}

export default Countdown
