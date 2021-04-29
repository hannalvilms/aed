import React, { Component } from "react";
import GameBoard from "../../Games/Memory/GameBoard";
import NewGame from "../../Games/Memory/NewGame";
import PlayAgain from '../../Games/Memory/PlayAgain';
import { linnudImages } from './Images';
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

class LinnudMemoryGame extends Component {
    static initState = () => {
        return {
            newGame: false,
            won: false,
            cards: [],
            clicks : 0,
            visible: true,
            result: OneStar
        };
    };

    state = LinnudMemoryGame.initState();

//Count the user clicks
    countClicks = () => {
        this.setState((prevState) => ({
            clicks : prevState.clicks + 1
        }));

        if(this.state.clicks < 30) {
            this.setState({
                result: FiveStars
            })
        } else if (this.state.clicks >= 30) {
            this.setState({
                result: FourStars
            })
        } else if (this.state.clicks >= 40) {
            this.setState({
                result: ThreeStars
            })
        } else if (this.state.clicks >= 50) {
            this.setState({
                result: TwoStars
            })
        }
    };

//Generate card deck
    generateDeck = () => {
        let amount = 10;
        let cards = [];
        let image = linnudImages;
        image = image.sort(() => Math.random() - 0.5);

        for (let i = 0; i < amount; i++) {
            let id = createId();
            let id2 = createId();
            const card1 = {
                id: id,
                matchesId: id2,
                url: image[i].url,
                flipped: false,
                found: false,
            };
            const card2 = {
                id: id2,
                matchesId: id,
                url: image[i].url,
                flipped: false,
                found: false,
            };
            cards.push(card1);
            cards.push(card2);
        }
        this.shuffleCards(cards);
        this.setState({
            cards: cards
        });
    };

//Shuffle card
    shuffleCards = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

//Reset the game
    resetGame = () => {
        this.setState(LinnudMemoryGame.initState(), () => {
            this.initGame()
        });
    };

//When user wins
    hasWon = () => {
        this.setState({
            won: true
        });
    };

//Initialise the game state
    initGame = () => {
        this.generateDeck();
        this.setState({
            newGame: true
        });
    };

    render() {
        const { cards, newGame, won, clicks } = this.state;
        return (
            <div className="container-fluid memory">
                <div className="container">
                    <div className="memory-menu" onClick={this.handleClick}
                         style={{
                             visibility: this.props.visible ? "visible" : "hidden"
                         }}>
                        {/*Users final score*/}
                        <div className="message" style={{
                            visibility: won ? "visible" : "hidden",
                            backgroundColor: won ? "rgba(255,255,255,0.8)" : "none"
                        }}>
                            {won && (
                                <h2 style={{
                                    visibility: this.props.visible ? "hidden" : "visible",
                                    opacity: this.props.visible ? "0" : "1"
                                }}>
                                    Tulemus: {clicks}
                                </h2>

                            )}
                            <p className='result-stars'>Hinne:</p>
                            <img alt='stars' className="result-img" src={this.state.result}/>
                        </div>
                        {/*Start game button*/}
                        <NewGame play={this.initGame} />
                        {/*New game button*/}
                        {won && (<PlayAgain again={this.resetGame} />)}
                    </div>
                    {/*Memory game board*/}
                    <div className="board-container">
                        {newGame ?
                            (
                                <div>
                                    <p className="message flips">Vajutatud kaardipaare: {clicks}</p>
                                    <GameBoard cards={cards} won={this.hasWon}
                                               click={this.countClicks} />
                                </div>
                            )
                            : null}
                        {newGame}
                    </div>
                </div>
            </div>
        );
    }
}

export default LinnudMemoryGame;

const createId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
