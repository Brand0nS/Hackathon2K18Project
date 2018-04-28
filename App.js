import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src= 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg/287px-Symbol_from_Marvel%27s_The_Avengers_logo.svg.png' className="App-logo" alt="logo" />
          <h1 className="App-title">The MCU Characeter Roster</h1>
        </header>
        <p className="App-intro">
         Search your favorite Marvel Characters
        </p>
      </div>
    );
  }
}

export default App;
