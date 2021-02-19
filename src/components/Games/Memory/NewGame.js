import React, { Component } from "react";

export class NewGame extends Component {

  state = {
    visible: true,
  };
//New game
  handleClick = () => {
    this.setState({ visible: !this.state.visible }, () => {
      this.props.play()
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="menu-item">
        <button className="btn btn-play"
          onClick={this.handleClick}
          style={{ visibility: visible ? "visible" : "hidden"}}>
          Alusta mängu
        </button>
      </div >
    );
  }
}

export default NewGame;
