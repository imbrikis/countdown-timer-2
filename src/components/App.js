import React, { useState } from 'react'
import AddEvent from './AddEvent'
import Countdown from './Countdown'

const App = () => {

  const [countdowns, setCountdowns] = useState([])

  const addCountdown = countdown => {
    setCountdowns([...countdowns, countdown])
  }

  const renderCountdowns = 
    countdowns.map(item => {
      return (
        <Countdown countdownDate={item} />
      )
    })

  return (
    <div className="app-container">
      <div className="title">
        <h1>Countdown App</h1>
      </div>
      <AddEvent addCountdown={addCountdown} />
      <div className="countdown-container">{renderCountdowns}</div>
    </div>
  )
}

export default App
