import React from "react"

const DateNode = props => {
  return (
    <div className="date-node" style={{height: props.radius+"px", width: props.radius+"px", color: props.textColor}}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle style={{fill: props.bgColor}} cx="25" cy="25" r="25"/>
      </svg>
      <span>{props.number}</span>
    </div>
  )
}

export default DateNode