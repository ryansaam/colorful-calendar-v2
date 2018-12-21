import React from 'react'

import DateGrid from './DateGrid.js'

const WeekDayNames = props => {
  const names = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const nameElements = names.map(el =>
    <div key={el}>{el}</div>
  )
  return (
    <div className="week-day-names" style={{backgroundColor: props.colors.weekDayNamesBG, height: props.width/7}} >
      {nameElements}
    </div>
  )
}

const CalendarView = props => {
  return (
    <div style={{width: props.width+"px"}}>
      <WeekDayNames colors={props.colors} width={props.width} />
      <DateGrid colors={props.colors} width={props.width} date={props.date} />
    </div>
  )
}

export default CalendarView
