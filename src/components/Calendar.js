import React from 'react'

import CalendarUI from './CalendarUI.js'
import CalendarView from './CalendarView'

function MonthView(date = new Date()) {
  let monthVal = date.getMonth()
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  this.prevMonth = months[monthVal]
  this.nextMonth =  months[monthVal]
  this.updateMonth = (bool = true) => {
    if (bool) {
      monthVal +=1
      monthVal = (monthVal > 11) ? 0 : monthVal
      this.nextMonth = months[monthVal]
      this.prevMonth = months[(monthVal-1 < 0) ? 11 : monthVal-1]
    } else {
      monthVal -=1
      monthVal = (monthVal < 0) ? 11 : monthVal
      this.prevMonth = months[monthVal]
      this.nextMonth = months[(monthVal+1 > 11) ? 0 : monthVal+1]
    }
  }
}

const Calendar = props => {
  return (
    <div className="calendar" style={{backgroundColor: props.colors.background, width: props.width+"px"}}>
      <CalendarUI view={new MonthView()} colors={props.colors.calendarUI} />
      <CalendarView colors={props.colors.calendarView} width={props.width} date={props.date} />
    </div>
  )
}

export default Calendar