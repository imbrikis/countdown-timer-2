import React, { useState, useEffect } from 'react'
import AddEvent from './AddEvent'
import Countdown from './Countdown'
import db from '../firebase'
import firebase from 'firebase'

const App = () => {

  const [countdowns, setCountdowns] = useState([])

  const addCountdown = (titleInput, dateInput) => {
    console.log(dateInput)
    db.collection('countdowns').add({
      date: new Date(dateInput).getTime(),
      title: titleInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  
  useEffect(() => {
    db.collection('countdowns').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setCountdowns(snapshot.docs.map(doc => ({id: doc.id, countdown: doc.data()})))
    })
  }, [])

  return (
    <div className="app-container">
      <div className="title">
        <h1>Countdown App</h1>
      </div>
      <AddEvent addCountdown={addCountdown} />
      <div className="countdowns-container">
        {countdowns.map(item => {
          return (
            <Countdown
              item={item}
              key={item.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
