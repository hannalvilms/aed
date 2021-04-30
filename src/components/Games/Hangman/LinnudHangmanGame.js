import React, { Component } from 'react';
import {randomWord, gameId} from "./LinnudWords";
import zero from "./images/step0.png";
import paasuke1 from "./images/paasuke1.png"; import paasuke2 from "./images/paasuke2.png"; import paasuke3 from "./images/paasuke3.png"; import paasuke4 from "./images/paasuke4.png"; import paasuke5 from "./images/paasuke5.png"; import paasuke6 from "./images/paasuke6.png";
import looke1 from "./images/looke1.png"; import looke2 from "./images/looke2.png"; import looke3 from "./images/looke3.png"; import looke4 from "./images/looke4.png"; import looke5 from "./images/looke5.png"; import looke6 from "./images/looke6.png";
import kuldnokk1 from "./images/kuldnokk1.png"; import kuldnokk2 from "./images/kuldnokk2.png"; import kuldnokk3 from "./images/kuldnokk3.png"; import kuldnokk4 from "./images/kuldnokk4.png"; import kuldnokk5 from "./images/kuldnokk5.png"; import kuldnokk6 from "./images/kuldnokk6.png";
import toonekurg1 from "./images/toonekurg1.png"; import toonekurg2 from "./images/toonekurg2.png"; import toonekurg3 from "./images/toonekurg3.png"; import toonekurg4 from "./images/toonekurg4.png"; import toonekurg5 from "./images/toonekurg5.png"; import toonekurg6 from "./images/toonekurg6.png";
import rasvatihane1 from "./images/rasvatihane1.png"; import rasvatihane2 from "./images/rasvatihane2.png"; import rasvatihane3 from "./images/rasvatihane3.png"; import rasvatihane4 from "./images/rasvatihane4.png"; import rasvatihane5 from "./images/rasvatihane5.png"; import rasvatihane6 from "./images/rasvatihane6.png";
import tuvi1 from "./images/tuvi1.png"; import tuvi2 from "./images/tuvi2.png"; import tuvi3 from "./images/tuvi3.png"; import tuvi4 from "./images/tuvi4.png"; import tuvi5 from "./images/tuvi5.png"; import tuvi6 from "./images/tuvi6.png";
import rahn1 from "./images/rähn1.png"; import rahn2 from "./images/rähn2.png"; import rahn3 from "./images/rähn3.png"; import rahn4 from "./images/rähn4.png"; import rahn5 from "./images/rähn5.png"; import rahn6 from "./images/rähn6.png";
import leevike1 from "./images/leevike1.png"; import leevike2 from "./images/leevike2.png"; import leevike3 from "./images/leevike3.png"; import leevike4 from "./images/leevike4.png"; import leevike5 from "./images/leevike5.png"; import leevike6 from "./images/leevike6.png";
import vares1 from "./images/vares1.png"; import vares2 from "./images/vares2.png"; import vares3 from "./images/vares3.png"; import vares4 from "./images/vares4.png"; import vares5 from "./images/vares5.png"; import vares6 from "./images/vares6.png";
import luik1 from "./images/luik1.png"; import luik2 from "./images/luik2.png"; import luik3 from "./images/luik3.png"; import luik4 from "./images/luik4.png"; import luik5 from "./images/luik5.png"; import luik6 from "./images/luik6.png";
import kajakas1 from "./images/kajakas1.png"; import kajakas2 from "./images/kajakas2.png"; import kajakas3 from "./images/kajakas3.png"; import kajakas4 from "./images/kajakas4.png"; import kajakas5 from "./images/kajakas5.png"; import kajakas6 from "./images/kajakas6.png";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';
import axios from "axios";
import {API} from '../../../url';

export default class LinnudGuessPictureGame extends Component {

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

    saveResult(result, grade) {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        const headers = {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
        //const data = { gameId, result }
        const data = new FormData();
        data.append('game_id', gameId);
        data.append('score', result);
        data.append('grade', grade);
        axios.post(API + `/api/add-result`, data, {
            headers: headers,
        })
            .then(response=> {
                console.log('success', response);
            })
            .catch(error=> {
                console.log('error', error);
            }
        );
    }

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
        this.saveResult(this.state.score, this.state.grade)
    }

    //Show correct images
    correctImg() {
        if(this.state.answer === "RÄHN") {
            console.log("rähn");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, rahn1, rahn2, rahn3, rahn4, rahn5, rahn6]
        }
        if (this.state.answer === "TUVI") {
            console.log("tuvi");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, tuvi1, tuvi2, tuvi3, tuvi4, tuvi5, tuvi6]
        }
        if (this.state.answer === "PÄÄSUKE") {
            console.log("paasuke");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, paasuke1, paasuke2, paasuke3, paasuke4, paasuke5, paasuke6]
        }
        if (this.state.answer === "LÕOKE") {
            console.log("looke");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, looke1, looke2, looke3, looke4, looke5, looke6]
        }
        if (this.state.answer === "KULDNOKK") {
            console.log("kuldnokk");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kuldnokk1, kuldnokk2, kuldnokk3, kuldnokk4, kuldnokk5, kuldnokk6]
        }
        if (this.state.answer === "TOONEKURG") {
            console.log("toonekurg");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, toonekurg1, toonekurg2, toonekurg3, toonekurg4, toonekurg5, toonekurg6]
        }
        if (this.state.answer === "RASVATIHANE") {
            console.log("rasvatihane");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, rasvatihane1, rasvatihane2, rasvatihane3, rasvatihane4, rasvatihane5, rasvatihane6]
        }
        if (this.state.answer === "LEEVIKE") {
            console.log("leevike");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, leevike1, leevike2, leevike3, leevike4, leevike5, leevike6]
        }
        if (this.state.answer === "VARES") {
            console.log("vares");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, vares1, vares2, vares3, vares4, vares5, vares6]
        }
        if (this.state.answer === "KAJAKAS") {
            console.log("kajakas");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, kajakas1, kajakas2, kajakas3, kajakas4, kajakas5, kajakas6]
        }
        if (this.state.answer === "LUIK") {
            console.log("luik");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.images = [zero, luik1, luik2, luik3, luik4, luik5, luik6]
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
        this.setState(LinnudGuessPictureGame.initState(), () => {
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
            this.saveResult(score);
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
                        }}>Arva linnu nimi</h3>
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
                            <h2>Linnu nimi oli:</h2>
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
