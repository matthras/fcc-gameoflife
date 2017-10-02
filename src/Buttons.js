import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.startGameOfLife = this.startGameOfLife.bind(this);
    this.stopGameOfLife = this.stopGameOfLife.bind(this);
    this.generateRandomGrid = this.generateRandomGrid.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
  }
  // Need to rethink how to invoke 'start' of Game of Life. Having the algorithm here means we'd need to pass the grid data down as well, so it's probably easier to invoke the algorithm in the parent component.
  startGameOflife() {
    this.props.startButton()
  }
  render() {
    return (
      <div className="Buttons">
        <button onClick={this.startGameOfLife} >Start</button>
        <button onClick={this.stopGameOfLife} >Stop</button>
        <button onClick={this.generateRandomGrid} >Generate</button>
        <button onClick={this.clearGrid} >Clear</button>
      </div>
    )
  }
}