import React, { Component } from "react";
import GameBoard from "../../Games/Memory/GameBoard";
import NewGame from "../../Games/Memory/NewGame";
import PlayAgain from '../../Games/Memory/PlayAgain';
import { images } from '../../Games/Memory/Images';


class MaismaaMemoryGame extends Component {
    static initState = () => {
        return {
            newGame: false,
            won: false,
            cards: [],
            clicks : 0,
            visible: true
        };
    };

    state = MaismaaMemoryGame.initState();

    countClicks = () => {
        this.setState((prevState) => ({
            clicks : prevState.clicks + 1
        }));
    };

    generateDeck = () => {
        let amount = 10;
        let cards = [];
        let image = images;
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

    shuffleCards = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    resetGame = () => {
        this.setState(MaismaaMemoryGame.initState(), () => {
            this.initGame()
        });
    };

    hasWon = () => {
        this.setState({
            won: true
        });
    };

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
                        <div className="message" style={{
                            visibility: won ? "visible" : "hidden",
                            opacity: won ? "0.8" : "0",
                            backgroundColor: won ? "white" : "none"
                        }}>
                            {won && (<h2 style={{
                                visibility: this.props.visible ? "hidden" : "visible",
                                opacity: this.props.visible ? "0" : "1",
                                backgroundColor: this.props.visible ? "none" : "white"
                            }}>Tulemus: {clicks}</h2>)}
                        </div>
                        <NewGame play={this.initGame} />
                        {won && (<PlayAgain again={this.resetGame} />)}
                    </div>
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

export default MaismaaMemoryGame;

const createId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
