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
      countdown: [titleInput, new Date(dateInput).getTime()],
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  const deleteCountdown = () => {
    console.log('gonna delete it...')
  }

  useEffect(() => {
    db.collection('countdowns').onSnapshot(snapshot => {
      setCountdowns(snapshot.docs.map(doc => doc.data().countdown))
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
              titleInput={item[0]} 
              dateInput={item[1]} 
              deleteCountdown={deleteCountdown}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
