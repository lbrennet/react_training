import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" Alt="app-logo" />
          <h2> Bienvenu </h2>
        </div>
        <p className="App-intro"> Formation React </p>
      </div>
    );
  }
}

export default App;
