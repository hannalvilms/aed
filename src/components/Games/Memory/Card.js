import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export default class Card extends Component {
  state = {
    isFlipped: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div
          key="front"
          onClick={this.handleClick}
        />
        <div
          key="back"
          onClick={this.handleClick}
        />
      </ReactCardFlip>
    );
  }
}
