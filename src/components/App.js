import React, { useState } from 'react'
import AddEvent from './AddEvent'
import Countdown from './Countdown'

const App = () => {

  const [countdowns, setCountdowns] = useState([])

  const addCountdown = (titleInput, dateInput) => {
    setCountdowns([...countdowns, {titleInput, dateInput}])
  }

  return (
    <div className="app-container">
      <div className="title">
        <h1>Countdown App</h1>
      </div>
      <AddEvent addCountdown={addCountdown} />
      <div className="countdown-container">
        {countdowns.map(item => {
          return (
            <Countdown titleInput={item.titleInput} dateInput={item.dateInput} />
          )
        })}
      </div>
    </div>
  )
}

export default App
