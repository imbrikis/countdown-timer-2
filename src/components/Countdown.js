import React from 'react'
import './Countdown.css'
import Timer from './Timer'
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverOutlined';

const Countdown = ({ titleInput, dateInput, deleteCountdown }) => {

  return (
    <div className="countdown">
      <Timer dateInput={dateInput} />
      <div className="countdown-title">{titleInput}</div>
      <div className="date-description">({new Date(dateInput).toLocaleString()})</div>
      <div className="delete-icon" onClick={() => deleteCountdown()} ><DeleteForeverIcon fontSize="large" /></div>
    </div>
  )
}

export default Countdown
