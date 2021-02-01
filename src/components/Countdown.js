import React from 'react'
import './Countdown.css'
import Timer from './Timer'

const Countdown = ({ titleInput, dateInput }) => {

  const processDate = () => {
    console.log(new Date(dateInput) - new Date().getTime())
  }

  // useEffect(() => {

  // })
  processDate()

  return (
    <div className="countdown">
      <Timer dateInput={dateInput} />
      <div className="countdown-title">{titleInput}</div>
      <div className="date-description">({new Date(dateInput).toLocaleString()})</div>
    </div>
  )
}

export default Countdown
