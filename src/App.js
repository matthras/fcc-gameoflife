import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';
import Options from './Options.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth,
      windowHeight: window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight,
      dummyNumber: 6969
    }
    this.changeNumber = this.changeNumber.bind(this)
  }

  changeNumber(num) {
    this.setState({dummyNumber: num});
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
        <p>Number: {this.state.dummyNumber}</p>
        <Options dummyNumButton={this.changeNumber} />
        <Grid />
      </div>
    );
  }
}

export default App;
