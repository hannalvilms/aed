import React, { Component } from 'react';
import {randomWord} from "./KoduloomadWords";
import zero from "./images/step0.png";
import lehm1 from "./images/lehm1.png"; import lehm2 from "./images/lehm2.png"; import lehm3 from "./images/lehm3.png"; import lehm4 from "./images/lehm4.png"; import lehm5 from "./images/lehm5.png"; import lehm6 from "./images/lehm6.png";
import lammas1 from "./images/lammas1.png"; import lammas2 from "./images/lammas2.png"; import lammas3 from "./images/lammas3.png"; import lammas4 from "./images/lammas4.png"; import lammas5 from "./images/lammas5.png"; import lammas6 from "./images/lammas6.png";
import siga1 from "./images/siga1.png"; import siga2 from "./images/siga2.png"; import siga3 from "./images/siga3.png"; import siga4 from "./images/siga4.png"; import siga5 from "./images/siga5.png"; import siga6 from "./images/siga6.png";
import kits1 from "./images/kits1.png"; import kits2 from "./images/kits2.png"; import kits3 from "./images/kits3.png"; import kits4 from "./images/kits4.png"; import kits5 from "./images/kits5.png"; import kits6 from "./images/kits6.png";
import kana1 from "./images/kana1.png"; import kana2 from "./images/kana2.png"; import kana3 from "./images/kana3.png"; import kana4 from "./images/kana4.png"; import kana5 from "./images/kana5.png"; import kana6 from "./images/kana6.png";
import hani1 from "./images/hani1.png"; import hani2 from "./images/hani2.png"; import hani3 from "./images/hani3.png"; import hani4 from "./images/hani4.png"; import hani5 from "./images/hani5.png"; import hani6 from "./images/hani6.png";
import kalkun1 from "./images/kalkun1.png"; import kalkun2 from "./images/kalkun2.png"; import kalkun3 from "./images/kalkun3.png"; import kalkun4 from "./images/kalkun4.png"; import kalkun5 from "./images/kalkun5.png"; import kalkun6 from "./images/kalkun6.png";
import merisiga1 from "./images/merisiga1.png"; import merisiga2 from "./images/merisiga2.png"; import merisiga3 from "./images/merisiga3.png"; import merisiga4 from "./images/merisiga4.png"; import merisiga5 from "./images/merisiga5.png"; import merisiga6 from "./images/merisiga6.png";
import hamster1 from "./images/hamster1.png"; import hamster2 from "./images/hamster2.png"; import hamster3 from "./images/hamster3.png"; import hamster4 from "./images/hamster4.png"; import hamster5 from "./images/hamster5.png"; import hamster6 from "./images/hamster6.png";
import papagoi1 from "./images/papagoi1.png"; import papagoi2 from "./images/papagoi2.png"; import papagoi3 from "./images/papagoi3.png"; import papagoi4 from "./images/papagoi4.png"; import papagoi5 from "./images/papagoi5.png"; import papagoi6 from "./images/papagoi6.png";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class KoduloomadHangmanGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            mistake: 0,
            guessed: new Set(),
            answer: randomWord(),
            maxWrong: 6,
            result: OneStar
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
            result: OneStar
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
            maxWrong: 6,
            result: this.state.result
        });
    };

    setResult = () => {
        if (this.state.score >= 9) {
            this.setState({
                result: FiveStars
            })
        } else if (this.state.score >= 7) {
            this.setState({
                result: FourStars
            })
        } else if (this.state.score >= 4) {
            this.setState({
                result: ThreeStars
            })
        } else if (this.state.score >= 2) {
            this.setState({
                result: TwoStars
            })
        }
    }

    //Show correct images
    correctImg() {
        if(this.state.answer === "LAMMAS") {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, lammas1, lammas2, lammas3, lammas4, lammas5, lammas6]
        }
        if (this.state.answer === "LEHM") {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, lehm1, lehm2, lehm3, lehm4, lehm5, lehm6]
        }
        if (this.state.answer === "SIGA") {
            console.log("siga");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, siga1, siga2, siga3, siga4, siga5, siga6]
        }
        if (this.state.answer === "KITS") {
            console.log("kits");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kits1, kits2, kits3, kits4, kits5, kits6]
        }
        if (this.state.answer === "KANA") {
            console.log("kana");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kana1, kana2, kana3, kana4, kana5, kana6]
        }
        if (this.state.answer === "HANI") {
            console.log("hani");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, hani1, hani2, hani3, hani4, hani5, hani6]
        }
        if (this.state.answer === "KALKUN") {
            console.log("kalkun");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kalkun1, kalkun2, kalkun3, kalkun4, kalkun5, kalkun6]
        }
        if (this.state.answer === "MERISIGA") {
            console.log("merisiga");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, merisiga1, merisiga2, merisiga3, merisiga4, merisiga5, merisiga6]
        }
        if (this.state.answer === "HAMSTER") {
            console.log("hamster");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, hamster1, hamster2, hamster3, hamster4, hamster5, hamster6]
        }
        if (this.state.answer === "PAPAGOI") {
            console.log("papagoi");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, papagoi1, papagoi2, papagoi3, papagoi4, papagoi5, papagoi6]
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
        this.setState(KoduloomadHangmanGame.initState(), () => {
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
