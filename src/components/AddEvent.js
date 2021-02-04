import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const AddEvent = ({ addCountdown }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: '0 auto',
      width: '37rem',
      background: '#D8D8D8',
      boxShadow: 'inset -2px -2px 4px rgba(255, 255, 255, 0.32), inset 2px 2px 4px rgba(0, 0, 0, 0.14)',
      borderRadius: '1rem',
      border: 'none',
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      fontFamily: 'Manrope',
      fontSize: '1.6rem',
      color: 'rgba(36, 36, 36, 0.75)',
      textAlign: 'center',
      height: '6.7rem',
      overflow: 'hidden'
    }
  }));

  const classes = useStyles()

  const [dateInput, setDateInput] = useState('')
  const [titleInput, setTitleInput] = useState('')

  const handleClick = () => {
    return ((dateInput && titleInput) ? 
    (
      console.log(dateInput),
      addCountdown(titleInput, dateInput),
      setTitleInput(''),
      setDateInput('')
    ) :
    console.log(`one or more entries are empty - date:${dateInput}, title:${titleInput}`)) 
  }

  return (
    <div className="add-event-container">
      <form>
        <div className="input-cal-wrapper">
          <input 
            className="input-event-name" 
            type="text" 
            placeholder="event name (36 char limit)" // Set this limit : CORRECT THIS
            value={titleInput} 
            onChange={e => setTitleInput(e.target.value)}
          />
            <TextField
              id="datetime-local"
              value={dateInput}
              classes={{
                root: classes.root
              }}
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => setDateInput(e.target.value)}
            />
        </div>
        <div className="button-wrapper">
          <div 
            disabled={!dateInput || !titleInput}
            type="submit"
            className="btn-submit"
            onClick={handleClick}
          >Start</div>
        </div>
      </form>
    </div>
  )
}

export default AddEvent
