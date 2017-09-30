import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">Conway's Game Of Life</h1>
        </header>
        <Grid />
      </div>
    );
  }
}

export default App;
