import React from 'react'
import './Timer.css'

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer-container">
      <table>
          <thead>
            <tr className="countdown-digits">
              <th>{days ? days : "00"}</th>
              <th>:</th>
              <th>{hours ? hours : "00"}</th>
              <th>:</th>
              <th>{minutes ? minutes : "00"}</th>
              <th>:</th>
              <th>{seconds ? seconds : "00"}</th>
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
