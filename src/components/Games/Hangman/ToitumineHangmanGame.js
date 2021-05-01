import React, { Component } from 'react';
import {randomWord} from "./ToitumineWords";
import zero from "./images/step0.png";
import vasikas1 from "./images/vasikas1.png"; import vasikas2 from "./images/vasikas2.png"; import vasikas3 from "./images/vasikas3.png"; import vasikas4 from "./images/vasikas4.png"; import vasikas5 from "./images/vasikas5.png"; import vasikas6 from "./images/vasikas6.png";
import lambatall1 from "./images/lambatall1.png"; import lambatall2 from "./images/lambatall2.png"; import lambatall3 from "./images/lambatall3.png"; import lambatall4 from "./images/lambatall4.png"; import lambatall5 from "./images/lambatall5.png"; import lambatall6 from "./images/lambatall6.png";
import kitsetall1 from "./images/kitsetall1.png"; import kitsetall2 from "./images/kitsetall2.png"; import kitsetall3 from "./images/kitsetall3.png"; import kitsetall4 from "./images/kitsetall4.png"; import kitsetall5 from "./images/kitsetall5.png"; import kitsetall6 from "./images/kitsetall6.png";
import porsas1 from "./images/porsas1.png"; import porsas2 from "./images/porsas2.png"; import porsas3 from "./images/porsas3.png"; import porsas4 from "./images/porsas4.png"; import porsas5 from "./images/porsas5.png"; import porsas6 from "./images/porsas6.png";
import kanatibu1 from "./images/kanatibu1.png"; import kanatibu2 from "./images/kanatibu2.png"; import kanatibu3 from "./images/kanatibu3.png"; import kanatibu4 from "./images/kanatibu4.png"; import kanatibu5 from "./images/kanatibu5.png"; import kanatibu6 from "./images/kanatibu6.png";
import parditibu1 from "./images/parditibu1.png"; import parditibu2 from "./images/parditibu2.png"; import parditibu3 from "./images/parditibu3.png"; import parditibu4 from "./images/parditibu4.png"; import parditibu5 from "./images/parditibu5.png"; import parditibu6 from "./images/parditibu6.png";
import varss1 from "./images/varss1.png"; import varss2 from "./images/varss2.png"; import varss3 from "./images/varss3.png"; import varss4 from "./images/varss4.png"; import varss5 from "./images/varss5.png"; import varss6 from "./images/varss6.png";
import koerakutsikas1 from "./images/koerakutsikas1.png"; import koerakutsikas2 from "./images/koerakutsikas2.png"; import koerakutsikas3 from "./images/koerakutsikas3.png"; import koerakutsikas4 from "./images/koerakutsikas4.png"; import koerakutsikas5 from "./images/koerakutsikas5.png"; import koerakutsikas6 from "./images/koerakutsikas6.png";
import rebasekutsikas1 from "./images/rebasekutsikas1.png"; import rebasekutsikas2 from "./images/rebasekutsikas2.png"; import rebasekutsikas3 from "./images/rebasekutsikas3.png"; import rebasekutsikas4 from "./images/rebasekutsikas4.png"; import rebasekutsikas5 from "./images/rebasekutsikas5.png"; import rebasekutsikas6 from "./images/rebasekutsikas6.png";
import FiveStars from "../../../images/five-stars.png";
import FourStars from "../../../images/four-stars.png";
import ThreeStars from "../../../images/three-stars.png";
import TwoStars from "../../../images/two-stars.png";
import OneStar from "../../../images/one-star.png";
import {saveResult} from "../../../saveResult";

export default class ToitumineHangmanGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6,
            result: OneStar,
            grade: 1
        };
        this.correctImg();
    }

    //Initial state for restarting the game
    static initState = () => {
        return {
            score: 0,
            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6,
            images: [zero],
            result: OneStar,
            grade: 1
        };
    };

    //Changes score, starts new game
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

    setResult = () => {
        if (this.state.score >= 9) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score >= 7) {
            this.setState({
                result: FourStars,
                grade: 4
            })
        } else if (this.state.score >= 4) {
            this.setState({
                result: ThreeStars,
                grade: 3
            })
        } else if (this.state.score >= 2) {
            this.setState({
                result: TwoStars,
                grade: 2
            })
        }
    }

    //Show correct images
    correctImg() {
        if(this.state.answer === "VASIKAS") {
            console.log("vasikas");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, vasikas1, vasikas2, vasikas3, vasikas4, vasikas5, vasikas6]
        }
        if (this.state.answer === "LAMBATALL") {
            console.log("lambatall");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, lambatall1, lambatall2, lambatall3, lambatall4, lambatall5, lambatall6]
        }
        if (this.state.answer === "KITSETALL") {
            console.log("kitsetall");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kitsetall1, kitsetall2, kitsetall3, kitsetall4, kitsetall5, kitsetall6]
        }
        if (this.state.answer === "PÕRSAS") {
            console.log("porsas");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, porsas1, porsas2, porsas3, porsas4, porsas5, porsas6]
        }
        if (this.state.answer === "KANATIBU") {
            console.log("kanatibu");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kanatibu1, kanatibu2, kanatibu3, kanatibu4, kanatibu5, kanatibu6]
        }
        if (this.state.answer === "PARDITIBU") {
            console.log("parditibu");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, parditibu1, parditibu2, parditibu3, parditibu4, parditibu5, parditibu6]
        }
        if (this.state.answer === "VARSS") {
            console.log("varss");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, varss1, varss2, varss3, varss4, varss5, varss6]
        }
        if (this.state.answer === "KOERAKUTSIKAS") {
            console.log("koerakutsikas");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, koerakutsikas1, koerakutsikas2, koerakutsikas3, koerakutsikas4, koerakutsikas5, koerakutsikas6]
        }
        if (this.state.answer === "REBASEKUTSIKAS") {
            console.log("rebasekutsikas");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, rebasekutsikas1, rebasekutsikas2, rebasekutsikas3, rebasekutsikas4, rebasekutsikas5, rebasekutsikas6]
        }
    }

    //Set state for new game
    initGame = () => {
        this.setState({
            newGame: true
        });
    };

    //Reset the game
    resetGame = () => {
        this.setState(ToitumineHangmanGame.initState(), () => {
            this.initGame();
            this.correctImg();
        });
    };

    //Shows answer in _'s
    guessedWord() {
        return this.state.answer
            .split("")
            .map((bingo) => (this.state.guessed.has(bingo) ? bingo : "_"));
    }

    //Adds guessed letters and mistake points
    handleGuess(value) {
        let letter = value;
        this.setState((st) => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
        }));
    }

    //Generates alphabet
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
        // eslint-disable-next-line no-lone-blocks
        {/*States and const's*/}
        let {score, mistake, answer, maxWrong, images } = this.state;
        const gameOver = mistake >= maxWrong;
        const altText = `${mistake}/${maxWrong} wrong guesses`;
        const isWinner = this.guessedWord().join("") === answer;
        let gameStat = this.generateButtons();
        if (isWinner) {
            gameStat = "Arvasid sõna ära!";
        }
        if (gameOver) {
            saveResult(this.state.score, this.state.grade, 23);
            gameStat = "Kahjuks ei arvanud sa sõna ära!";
        }
        return (
            <div className="container-fluid hangman-fluid">
                <div className="container hangman">
                    <div className="hangman-content">
                        {/*Mistakes*/}
                        <span style={{
                            visibility: gameOver ? 'hidden' : 'visible'
                        }}>
                            Valesid pakkumisi: {mistake}/6
                        </span>
                        <br/>
                        {/*Guessed words*/}
                        <span style={{
                            visibility: gameOver ? 'hidden' : 'visible'
                        }}>
                            Arvatud sõnu: {score}
                        </span>
                        <h3 style={{
                            visibility: gameOver ? 'hidden' : 'visible'
                        }}>Arva looma nimi</h3>
                        {/*Hangman word*/}
                        <p className="hangman-word">
                            {!gameOver ? this.guessedWord() : answer}{" "}
                        </p>
                        {/*Hint images*/}
                        <div>
                            <img src={images[mistake]} alt={altText} />
                        </div>
                        {/*Alphabet*/}
                        <p className="hangman-letters col-lg-12" style={{
                            color: gameOver ? '#2D2D2D' : '#F4F4F4'
                        }}>{gameStat}</p>
                        <div>
                            <p>
                                <button
                                    className="reset"
                                    onClick={() => {
                                        this.nextGuess();
                                        this.setResult();
                                    }}
                                    disabled={!(isWinner)}
                                    style={{
                                        visibility: gameOver ? 'hidden' : 'visible',
                                    }}
                                >
                                    Uus sõna
                                </button>
                            </p>
                        </div>
                        {/*Result page when game is finished*/}
                        <div className="result-content" style={{
                            visibility: gameOver ? 'visible' : 'hidden'
                        }}
                        >
                            <h3>Tulemus: {score}</h3>
                            <h2>Looma nimi oli:</h2>
                            <div className="hangman-results">
                                <p>Hinne:</p>
                                <img alt='result in stars' className="result-img" src={this.state.result}/>
                            </div>
                            <button className="newGame" onClick={this.resetGame}>Uus mäng</button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
