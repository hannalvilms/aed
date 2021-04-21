import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Paasuke from "../img/paasuke.jpg";
import Looke from "../img/looke.jpeg";
import Kuldnokk from "../img/kuldnokk.jpg";
import Toonekurg from "../img/toonekurg.jpg";
import Rasvatihane from "../img/rasvatihane.jpg";
import Leevike from "../img/leevike.jpg";
import Vares from "../img/vares.jpg";
import Kajakas from "../img/kajakas.jpg";
import Tuvi from "../img/tuvi.jpg";
import Rahn from "../img/rähn.jpg";
import Luik from "../img/luik.jpg";
import Hani from "../img/hani.jpg";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class LinnudGuessPictureGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: {
                1: 'Kes on pildil?',
                2: 'Kes on pildil?',
                3: 'Kes on pildil?',
                4: 'Kes on pildil?',
                5: 'Kes on pildil?',
                6: 'Kes on pildil?',
                7: 'Kes on pildil?',
                8: 'Kes on pildil?',
                9: 'Kes on pildil?',
                10: 'Kes on pildil?',
                11: 'Kes on pildil?',
                12: 'Kes on pildil?',
            },
            answers: {
                1: {
                    1: "pääsuke", image: Paasuke,
                },
                2: {
                    2: 'lõoke', image: Looke,
                },
                3: {
                    3: 'kuldnokk', image: Kuldnokk,
                },
                4: {
                    4: 'toonekurg', image: Toonekurg,
                },
                5: {
                    5: 'rasvatihane', image: Rasvatihane,
                },
                6: {
                    6: 'leevike', image: Leevike,
                },
                7: {
                    7: 'vares', image: Vares,
                },
                8: {
                    8: 'tuvi', image: Tuvi,
                },
                9: {
                    9: 'rähn', image: Rahn,
                },
                10: {
                    10: 'kajakas', image: Kajakas,
                },
                11: {
                    11: 'luik', image: Luik,
                },
                12: {
                    12: 'hani', image: Hani,
                }
            },
            correctAnswers: {
                1: 'pääsuke',
                2: 'lõoke',
                3: 'kuldnokk',
                4: 'toonekurg',
                5: 'rasvatihane',
                6: 'leevike',
                7: 'vares',
                8: 'tuvi',
                9: 'rähn',
                10: 'kajakas',
                11: 'luik',
                12: 'hani',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
            result: OneStar
        };
        this.handleChange = this.handleChange.bind(this);
        this.onHandleCheck = this.onHandleCheck.bind(this);
    }

//Initial state for restarting the game
    static initState = () => {
        return {
            questions: {
                1: 'Kes on pildil?',
                2: 'Kes on pildil?',
                3: 'Kes on pildil?',
                4: 'Kes on pildil?',
                5: 'Kes on pildil?',
                6: 'Kes on pildil?',
                7: 'Kes on pildil?',
                8: 'Kes on pildil?',
                9: 'Kes on pildil?',
                10: 'Kes on pildil?',
                11: 'Kes on pildil?',
                12: 'Kes on pildil?',
            },
            answers: {
                1: {
                    1: "pääsuke", image: Paasuke,
                },
                2: {
                    2: 'lõoke', image: Looke,
                },
                3: {
                    3: 'kuldnokk', image: Kuldnokk,
                },
                4: {
                    4: 'toonekurg', image: Toonekurg,
                },
                5: {
                    5: 'rasvatihane', image: Rasvatihane,
                },
                6: {
                    6: 'leevike', image: Leevike,
                },
                7: {
                    7: 'vares', image: Vares,
                },
                8: {
                    8: 'tuvi', image: Tuvi,
                },
                9: {
                    9: 'rähn', image: Rahn,
                },
                10: {
                    10: 'kajakas', image: Kajakas,
                },
                11: {
                    11: 'luik', image: Luik,
                },
                12: {
                    12: 'hani', image: Hani,
                }
            },
            correctAnswers: {
                1: 'pääsuke',
                2: 'lõoke',
                3: 'kuldnokk',
                4: 'toonekurg',
                5: 'rasvatihane',
                6: 'leevike',
                7: 'vares',
                8: 'tuvi',
                9: 'rähn',
                10: 'kajakas',
                11: 'luik',
                12: 'hani',
            },
            correctAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
            result: OneStar
        };
    };

//New game
    initGame = () => {
        this.setState({
            newGame: true
        });
    };
//Get user input and set inputValue to equal user input
    async updateInputValue(evt) {
        await this.setState({
            inputValue: evt.target.value
        });
    }
    handleChange(evt) {
        this.setState({inputValue: evt.target.inputValue});
    }
//Reset user input
     onHandleCheck() {
        this.setState({
            inputValue: ''
        });
    }

// Checks if the answer is correct
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(correctAnswers[step] === this.state.inputValue.toLowerCase()){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    };

// To the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    };

//Reset the game
    resetGame = () => {
        this.setState(LinnudGuessPictureGame.initState(), () => {
            this.initGame()
        });
    };

    setResult = () => {
        if(this.state.score >= 10) {
            this.setState({
                result: FiveStars
            })
        } else if (this.state.score >= 8) {
            this.setState({
                result: FourStars
            })
        } else if (this.state.score >= 6) {
            this.setState({
                result: ThreeStars
            })
        } else if (this.state.score >= 2) {
            this.setState({
                result: TwoStars
            })
        }
    }

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return (
            <div className="container-fluid pic-quiz-fluid">
                <div className="container pic-quiz">
                    <div className="pic-quiz-content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                {/*Question*/}
                                <MaismaaQuestion
                                    question={questions[step]}
                                />
                                <p>Küsimus {this.state.step}/{Object.keys(questions).length}</p>
                                {/*Correct image on each step*/}
                                <img alt="answer"
                                     className="pic-quiz-img"
                                     src={answers[step].image}
                                />
                                {/*Answer*/}
                                <GuessPictureAnswer
                                    answer={answers[step]}
                                    step={step}
                                    correctAnswer={correctAnswer}
                                    clickedAnswer={clickedAnswer}
                                />
                                {/*User input*/}
                                <input
                                       id="mainInput"
                                       onChange={evt => this.updateInputValue(evt)}
                                       type="text"
                                       value={this.state.inputValue}
                                       disabled={!!clickedAnswer}
                                />
                                {/*Check answer*/}
                                <button className="pic-quiz-check"
                                        onClick={this.checkAnswer}
                                        disabled={!!clickedAnswer}>
                                    Kontrolli
                                </button>
                                <br/>
                                {/*Next question*/}
                                <button
                                    type="submit"
                                    className="NextStep"
                                    disabled={
                                        !(clickedAnswer && Object.keys(questions).length >= step)
                                    }
                                    onClick={() => {
                                        this.nextStep(step);
                                        this.onHandleCheck();
                                        this.setResult();
                                    }}>Järgmine küsimus</button>
                            </>) : (
                                <div className="finalPage">
                                    {/*Result page and new game*/}
                                    <h1>Mängu lõpp!</h1>
                                    <p>Tulemus {score}/{Object.keys(questions).length}</p>
                                    <p>Hinne:</p>
                                    <img alt='result in stars' className="result-img" src={this.state.result}/>
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
