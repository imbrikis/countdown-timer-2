import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = ({ date }) => {

  const [timerDigits, setTimerDigits] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  // sets the hours, minutes, and seconds to 2 digits (prepends a zero if needed)
  const formatDateTimeFields = d => {
    let x = d.toString().split("")
    x.unshift("0")
    let result = x.slice(x.length - 2, x.length)
    return result
  }

  const calcTimerDigits = i => {
    let result = (new Date(date).getTime()) - (new Date().getTime())
    setTimerDigits({
      ...timerDigits,
      days : Math.floor(result / 86400000),
      hours : formatDateTimeFields(Math.floor(result / 3600000) % 24), 
      minutes : formatDateTimeFields(Math.floor(result / 60000) % 60),
      seconds : formatDateTimeFields(Math.floor(result / 1000) % 60)
    })
  }

  useEffect(() => {
    const interval = setInterval(() => calcTimerDigits(date), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="timer-container">
      <table>
          <thead>
            <tr className="countdown-digits">
              <th>{timerDigits.days ? timerDigits.days : "00"}</th>
              <th>:</th>
              <th>{timerDigits.hours ? timerDigits.hours : "00"}</th>
              <th>:</th>
              <th>{timerDigits.minutes ? timerDigits.minutes : "00"}</th>
              <th>:</th>
              <th>{timerDigits.seconds ? timerDigits.seconds : "00"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="digit-descriptors">
              <td>DAYS</td>
              <td></td>
              <td>HOURS</td>
              <td></td>
              <td>MINUTES</td>
              <td></td>
              <td>SECONDS</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Timer
