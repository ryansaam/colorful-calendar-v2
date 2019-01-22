import React, { Component } from 'react';
import './Calendar.css'

import Calendar from './components/Calendar.js'
import colorTheme from './calendar.colors.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar
          width={200}
          date={new Date()}
          colors={colorTheme.original}
        />
      </div>
    );
  }
}

export default App;
