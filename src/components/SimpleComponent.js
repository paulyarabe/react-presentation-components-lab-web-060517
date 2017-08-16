// Code SimpleComponentHere Here

import React from 'react'

class SimpleComponent extends React.Component {

  constructor(){
    super()

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h4>{this.state.mood}</h4>
      </div>
    );
  }
}

export default SimpleComponent
