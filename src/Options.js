import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props)
    this.changeButton = this.changeButton.bind(this)
  }

  changeButton() {
    this.props.dummyNumButton(this.refs.input.value)
  }

  render() {
    return(
      <div className="Options">
        <input ref='input' />
        <button onClick={this.changeButton}></button>
      </div>
    )
  }
}

export default Options;