# colorful-calendar

[![npm version](https://badge.fury.io/js/colorful-calendar.svg)](https://badge.fury.io/js/colorful-calendar)

A simple calendar component for react applications

```jsx
import React from 'react'
import { Calendar, colorTheme } from './calendar'

const App = () => {
  return (
    <div className="App">
      <Calendar
        width={300}
        date={new Date()}
        colors={colorTheme.redflat}
      >
    <div>
  )
}
```

### Install

#### Using npm
Current version not available but will be soon. 
```
npm install colorful-calendar
```

## Required component properties

Properties | Type | Description
------------ | ------------- | -------------
width | Number | Sets the width of the component in pixels
date | Object | Provides the component with the date passed to it
colors | Object | Provides the component with the color theme chosen from calendar.colors.js

## Optional feature
Pass a custom colors object

```js
{
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}
```
... or if you wish you can create a custom.colors.js file  
Note: you can name this file whatever you would like.

### custom.colors.js
```js
const myNewColorTheme = {
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}

export { myNewColorTheme, ... , ... }
```
### App.js
```jsx
import React from 'react'
import { Calendar } from './calendar'
import { myNewColorTheme } from './custom.colors.js'

const App = () => {
  return (
     <div className="App">
       <Calendar
         width={300}
         date={new Date()}
         colors={myNewColorTheme}
       >
     <div>
  )
}
```
