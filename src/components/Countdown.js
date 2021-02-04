import React from 'react'
import './Countdown.css'
import Timer from './Timer'
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverOutlined';

const Countdown = ({ title, date, deleteCountdown }) => {

  return (
    <div className="countdown">
      <Timer date={date} />
      <div className="countdown-title">{title}</div>
      <div className="date-description">({new Date(date).toLocaleString()})</div>
      <div className="delete-icon" onClick={() => deleteCountdown()} ><DeleteForeverIcon fontSize="large" /></div>
    </div>
  )
}

export default Countdown
