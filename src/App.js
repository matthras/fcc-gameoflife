import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth,
      windowHeight: window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
    }
  }
  // Calculate 
  componentWillMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">Conway's Game Of Life</h1>
        </header>
        <p>Width of the window is {this.state.windowWidth}</p>
        <p>Height of the windows is {this.state.windowHeight}</p>
        <Grid />
      </div>
    );
  }
}

export default App;
