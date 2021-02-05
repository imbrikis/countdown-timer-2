import React from 'react'
import Timer from './Timer'
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverOutlined';
import db from '../firebase'

const Countdown = ({ item }) => {

  return (
    <div className="countdown">
      <div className="countdown-title">{item.countdown.title}</div>
      <Timer date={item.countdown.date} />
      <div className="date-description">({new Date(item.countdown.date).toLocaleString()})</div>
      <div className="delete-icon" onClick={event => db.collection('countdowns').doc(item.id).delete()} ><DeleteForeverIcon fontSize="large" /></div>
    </div>
  )
}

export default Countdown
