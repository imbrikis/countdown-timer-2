import React from 'react'
import Timer from './Timer'
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverOutlined'
import { makeStyles } from '@material-ui/core/styles'
import db from '../firebase'

const Countdown = ({ item }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      ['@media (max-width: 500px)'] : {
        height: '1.5rem',
        width: '1.5rem',
      }
    }
  }));

  const classes = useStyles()

  return (
    <div className="countdown">
      <div className="countdown-title">{item.countdown.title}</div>
      <Timer date={item.countdown.date} />
      <div className="date-description">({new Date(item.countdown.date).toLocaleString()})</div>
      <div className="delete-icon" onClick={event => db.collection('countdowns').doc(item.id).delete()} >
        <DeleteForeverIcon 
          fontSize="large"
          classes={{
            root: classes.root
          }}
        />
      </div>
    </div>
  )
}

export default Countdown
