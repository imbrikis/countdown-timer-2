import React from 'react'
import './Countdown.css'

const Countdown = ({ titleInput, dateInput }) => {
  return (
    <div className="countdown">
      <h1>{titleInput}</h1>
      <h1>{dateInput}</h1>
    </div>
  )
}

export default Countdown
