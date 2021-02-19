import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import MemoryQuestionmark from '../../../images/memory-questionmark.png';

export class MemoryCard extends Component {

  flipCard = e => {
    if (this.props.found || this.props.flipped) return;
    this.props.flip(e.target.id);
  };

  render() {
    const { id, imgUrl, flipped, found } = this.props;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div id={id}
            className="memoryCard front"
            onClick={this.flipCard}
            style={{
                backgroundImage: `url(${MemoryQuestionmark})`,
                borderRadius: `20px`
            }}
            key="front"
          />
          <div
            className="memoryCard"
            onClick={this.flipCard}
            key="back"
            style={{
                backgroundColor: `#FFF`,
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat", backgroundPosition: "center",
              border: found ? "2px solid #23AF37" : "2px solid #CC0E0E",
              cursor : found ? "" : "pointer",
            }}
          >
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default MemoryCard;
