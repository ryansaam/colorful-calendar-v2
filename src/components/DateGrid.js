import React from 'react'

import DateNode from './DateNode.js'
import { fillCalendar } from '../calendar.tools.js'

const DateGrid = props => {
  let radius = props.width / 7
  const dateData = fillCalendar(props.date.getMonth(), props.date.getFullYear())
  const colors = props.colors
  const dateNodes = dateData.map(el => {
    if (el.type === "leadDate") return <DateNode bgColor={colors.leadDate} key={el.id} radius={radius} number={el.date} />
    if (el.type === "monthDate" && el.date === props.date.getDate()) {
      return <DateNode bgColor={colors.currentDate} key={el.id} radius={radius} number={el.date} />
    }
    if (el.type === "monthDate") return <DateNode bgColor={colors.monthDate} key={el.id} radius={radius} number={el.date} />
    if (el.type === "postDate") return <DateNode bgColor={colors.postDate} key={el.id} radius={radius} number={el.date} />
    else { return null }
  })
  return (
    <div className="date-grid" style={{width: props.width+"px", }}>
      {dateNodes}
    </div> 
  )
}

export default DateGrid
