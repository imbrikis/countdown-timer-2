import React, { useState, useEffect } from 'react'

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
      <div className="cell digits">{timerDigits.days ? timerDigits.days : "00"}</div>
      <div className="cell digit-separator">:</div>
      <div className="cell digits">{timerDigits.hours ? timerDigits.hours : "00"}</div>
      <div className="cell digit-separator">:</div>
      <div className="cell digits">{timerDigits.minutes ? timerDigits.minutes : "00"}</div>
      <div className="cell digit-separator">:</div>
      <div className="cell digits">{timerDigits.seconds ? timerDigits.seconds : "00"}</div>
      <div className="cell digit-descriptors">DAYS</div>
      <div className="cell digit-descriptors"></div>
      <div className="cell digit-descriptors">HOURS</div>
      <div className="cell digit-descriptors"></div>
      <div className="cell digit-descriptors">MINUTES</div>
      <div className="cell digit-descriptors"></div>
      <div className="cell digit-descriptors">SECONDS</div>
    </div>
  )
}

export default Timer
