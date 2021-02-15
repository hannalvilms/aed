import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import Bird from "../../../images/bird.jpg";
import Bird2 from "../../../images/bird2.jpg";
import {randomWord, randomWordTwo, randomWordThree} from "./LinnudWords";

import zero from "./images/step0.png";
import rahn1 from "./images/rähn1.png";
import rahn2 from "./images/rähn2.png";
import rahn3 from "./images/rähn3.png";
import rahn4 from "./images/rähn4.png";
import rahn5 from "./images/rähn5.png";
import rahn6 from "./images/rähn6.png";

import tuvi1 from "./images/tuvi1.png";
import tuvi2 from "./images/tuvi2.png";
import tuvi3 from "./images/tuvi3.png";
import tuvi4 from "./images/tuvi4.png";
import tuvi5 from "./images/tuvi5.png";
import tuvi6 from "./images/tuvi6.png";

export default class LinnudGuessPictureGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: {
                1: 'Arva linnu nimi',
                2: 'Arva linnu nimi',
                3: 'Arva linnu nimi'
            },
            answers: {
                1: {
                    1: randomWord()
                }
            },
            correctAnswers: {
                1: randomWord()
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,

            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6
        };
        this.correctImg();
        this.handleChange = this.handleChange.bind(this);
    }

    static initState = () => {
        return {
            questions: {
                1: 'Arva linnu nimi',
                2: 'Arva linnu nimi',
                3: 'Arva linnu nimi'
            },
            answers: {
                1: {
                    1: randomWord()
                }
            },
            correctAnswers: {
                1: randomWord()
            },
            correctAnswer: 0,
            step: 1,
            score: 0,
            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6,
            images: [zero]
        };
    };

    nextGuess = () => {
        this.resetGame();
        this.setState({
            score: this.state.score + 1,
            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6
        });
    };

    correctImg() {
        if(this.state.answer === "RÄHN") {
            console.log("rähn");
            this.state.images = [zero, rahn1, rahn2, rahn3, rahn4, rahn5, rahn6]
        }
        if (this.state.answer === "TUVI") {
            console.log("tuvi");
            this.state.images = [zero, tuvi1, tuvi2, tuvi3, tuvi4, tuvi5, tuvi6]
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.inputValue});
    }

    //uus mäng
    initGame = () => {
        this.setState({
            newGame: true
        });
    };

    resetGame = () => {
        this.setState(LinnudGuessPictureGame.initState(), () => {
            this.initGame();
            this.correctImg();
        });
    };

    guessedWord() {
        return this.state.answer
            .split("")
            .map((bingo) => (this.state.guessed.has(bingo) ? bingo : "_"));
    }

    handleGuess(value) {
        let letter = value;
        this.setState((st) => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
        }));
    }

    generateButtons() {
        return "ABCDEFGHIJKLMNOPQRSŠZŽTUVWÕÄÖÜXY".split("").map((letter) => (
            <button
                key={letter}
                value={letter}
                onClick={(e) => this.handleGuess(e.target.value)}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    }

    render() {
        let { questions, step, score, mistake, answer, maxWrong, images } = this.state;
        const gameOver = mistake >= maxWrong;
        const altText = `${mistake}/${maxWrong} wrong guesses`;
        const isWinner = this.guessedWord().join("") === answer;
        let gameStat = this.generateButtons();
        if (isWinner) {
            gameStat = "Arvasid sõna ära!";
        }
        if (gameOver) {
            gameStat = "Kahjuks ei arvanud sa sõna ära!";
        }
        return (
            <div className="container-fluid hangman-fluid">
                <div className="container hangman">
                    <div className="hangman-content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                <span className="d-xl-none d-lg-none" style={{
                                    visibility: gameOver ? 'hidden' : 'visible'
                                }}>
                                    Valesid pakkumisi: {mistake}
                                </span>
                                <br/>
                                <span style={{
                                    visibility: gameOver ? 'hidden' : 'visible'
                                }}>
                                    Arvatud sõnu: {score}
                                </span>
                                <h3 style={{
                                    visibility: gameOver ? 'hidden' : 'visible'
                                }}>Arva linnu nimi</h3>
                                <p className="hangman-word">
                                    {!gameOver ? this.guessedWord() : answer}{" "}
                                </p>
                                <div>
                                    <img src={images[mistake]} alt={altText} />
                                </div>
                                <p className="hangman-letters col-lg-12" style={{
                                    color: gameOver ? '#2D2D2D' : '#F4F4F4'
                                }}>{gameStat}</p>
                                <div>
                                    <p>
                                        <button
                                            className="reset"
                                            onClick={this.nextGuess}
                                            disabled={!(isWinner)}
                                            style={{
                                                visibility: gameOver ? 'hidden' : 'visible',
                                            }}
                                        >
                                            Uus sõna
                                        </button>
                                    </p>
                                </div>
                                <div className="result-content" style={{
                                    visibility: gameOver ? 'visible' : 'hidden'
                                }}
                                >
                                    <h3>Tulemus: {score}</h3>
                                    <h2>Linnu nimi oli:</h2>
                                    <button className="newGame" onClick={this.resetGame}>Uus mäng</button>
                                </div>
                            </>) : (
                                <div className="finalPage">
                                    <h1>You have completed the quiz!</h1>
                                    <p>Tulemus {score}/{Object.keys(questions).length}</p>
                                    <PlayAgain again={this.resetGame} />
                                </div>
                            )
                        }
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
