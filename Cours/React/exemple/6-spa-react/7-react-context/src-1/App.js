import React, { Component } from 'react';
import './App.css';

import Board from './Board';

class App extends Component {

  state = {
    currentUser: 22,
  }

  render() {
    const { state: { currentUser } } = this;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome, Stagiaire !</h1>
        </header>

        <Board currentUser={currentUser} />

      </div>
    );
  }
}

export default App;
