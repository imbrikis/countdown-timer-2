import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const AddEvent = ({ addCountdown }) => {

  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState('')

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: '0 auto',
      width: '37rem',
      background: '#D8D8D8',
      boxShadow: 'inset -4px -5px 14px rgba(255, 255, 255, 0.5), inset 2px 2px 11px rgba(0, 0, 0, 0.25)',
      borderRadius: '1rem',
      border: 'none',
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      border: 'none',
      fontFamily: 'Manrope',
      fontSize: '1.6rem',
      color: 'rgba(36, 36, 36, 0.75)',
      textAlign: 'center',
      width: '37rem',
      height: '6.7rem',
      overflow: 'hidden'
    }
  }));

  const classes = useStyles()

  // const inputChange = e => {
  //   setInput(e)
  //   console.log(input)
  // }

  // const submitCountdownDate = e => {
  //   e.preventDefault()
  //   return (
  //     document.querySelector('.datepicker').value !== '' ? 
  //     addCountdown(document.querySelector('.datepicker').value) :
  //     null
  //   )
  // }

  return (
    <div className="add-event-container">
      <form>
        <div className="input-cal-wrapper">
          <input className="input-event-name" type="text" placeholder="event name (36 char limit)" />
            <TextField
              id="datetime-local"
              classes={{
                root: classes.root
              }}
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </div>
        <div className="button-wrapper">
          <div 
            disabled={!input}
            type="submit"
            className="btn-submit"
          >Start</div>
        </div>
      </form>
    </div>
  )
}

export default AddEvent
