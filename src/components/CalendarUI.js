import React, { useState, useEffect } from "react"

const CalendarUI = props => {
  const [rotateVal, setRotateVal] = useState(0)
  const [bool, setBool] = useState(true)
  const [month, setMonth] = useState(props.view.nextMonth)
  useEffect(
    () => {props.view.updateMonth(bool)}, [bool]
  )
  console.log(props.view)
  return (
    <div>
      <div style={{width: "100%"}}>
        <svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg">
          <rect style={{fill: props.colors.currentDateBG, width: "200", height: "30", rx: "15"}} />
          <path d="M 100, 30 h 50, 0 c 0, 10, 0, 25, -25, 25 h -50, 0 c -10, 0, -25, 0, -25, -25 h 50, 0 z" 
          style={{fill: props.colors.monthYearViewBG}}/>
          <text id="full-date-view" x="30" y="20" >Sun Dec 21 2018</text>
          <g className="month-year-group" style={{transform: "translate(-10px) rotate("+rotateVal+"deg)"}}>
            <rect x="50" y="30" style={{fill: "none", width: "120", height: "120"}} />
            <text id="month-year-view" className="month-year" x="75" y="50" >{month} 2018</text>}
          </g>
          <path d="M 150, 30 h 50, 0 v 0, 40 h -200, 0 v -40, 0 h 50, 0 c 0, 10, 0, 25, 25, 25 h 50, 0 c 10, 0, 25, 0, 25, -25 z"
          style={{fill: props.colors.background}}/>
          <g onClick={() => { 
            setRotateVal(rotateVal+360) 
            if (bool) { setBool(false) } 
            else { props.view.updateMonth(bool) } 
            setMonth(props.view.prevMonth)
          }}>
            <rect y="40" style={{fill: props.colors.arrowsBG, width: "50", height: "30", rx: "15"}}/>
            <path d="M 15, 52.5 h 30, 0 v 0, 5 h -30, 0 l 5, 8 h -6, 0 l -8, -10 l 8, -10 h 6, 0 z" 
            style={{fill: props.colors.textColor}}/>
          </g>
          <g onClick={() => {
            setRotateVal(rotateVal-360) 
            if (!bool) { setBool(true) }
            else { props.view.updateMonth(bool) }
            setMonth(props.view.nextMonth)
          }}>
            <rect x="150" y="40" style={{fill: props.colors.arrowsBG, width: "50", height: "30", rx: "15"}}/>
            <path d="M 15, 52.5 h 30, 0 v 0, 5 h -30, 0 l 5, 8 h -6, 0 l -8, -10 l 8, -10 h 6, 0 z" 
            style={{fill: props.colors.textColor, transform: "translate(200px, 0px) rotateY(180deg)"}}/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CalendarUI