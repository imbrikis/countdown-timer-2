import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.min.css'

const AddEvent = ({ addCountdown }) => {

  const [startDate, setStartDate] = useState(new Date());

  const submitCountdownDate = i => {
    return (
      i ? addCountdown(i) : 0
    )
  }

  return (
    <div className="add-event-container">
      <form>
        <div className="input-cal-wrapper">
          <input className="input-event-name" type="text" placeholder="event name" />
          <DatePicker
            className="datepicker"
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div className="button-wrapper">
          <div 
            type="submit"
            className="btn-submit"
            onClick={() => submitCountdownDate(document.querySelector('.datepicker').value)}
          >Start</div>
        </div>
      </form>
    </div>
  )
}

export default AddEvent
