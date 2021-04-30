import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Hobune from "../img/hobune.jpg";
import Kass from "../img/kass.jpg";
import Lammas from "../img/lammas.jpg";
import Lehm from "../img/lehm.jpg";
import Siga from "../img/siga.jpg";
import Koer from "../img/koer.jpg";
import Kits from "../img/kits.jpg";
import Kana from "../img/kana.jpg";
import Hani from "../img/hani.jpg";
import Kalkun from "../img/kalkun.jpg";
import Hamster from "../img/hamster.jpg";
import Merisiga from "../img/merisiga.jpg";
import Papagoi from "../img/papagoi.jpg";
import Janes from "../img/janes.jpg";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class KoduloomadGuessPictureGame extends Component {

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
                13: 'Kes on pildil?',
                14: 'Kes on pildil?',
            },
            answers: {
                1: {
                    1: "hobune", image: Hobune,
                },
                2: {
                    2: 'kass', image: Kass,
                },
                3: {
                    3: 'lammas', image: Lammas,
                },
                4: {
                    4: 'lehm', image: Lehm,
                },
                5: {
                    5: 'siga', image: Siga,
                },
                6: {
                    6: 'koer', image: Koer,
                },
                7: {
                    7: 'kits', image: Kits,
                },
                8: {
                    8: 'kana', image: Kana,
                },
                9: {
                    9: 'hani', image: Hani,
                },
                10: {
                    10: 'kalkun', image: Kalkun,
                },
                11: {
                    11: 'hamster', image: Hamster,
                },
                12: {
                    12: 'merisiga', image: Merisiga,
                },
                13: {
                    13: 'papagoi', image: Papagoi,
                },
                14: {
                    14: 'jänes', image: Janes,
                },
            },
            correctAnswers: {
                1: 'hobune',
                2: 'kass',
                3: 'lammas',
                4: 'lehm',
                5: 'siga',
                6: 'koer',
                7: 'kits',
                8: 'kana',
                9: 'hani',
                10: 'kalkun',
                11: 'hamster',
                12: 'merisiga',
                13: 'papagoi',
                14: 'jänes',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
            result: OneStar,
            grade: 1
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
                13: 'Kes on pildil?',
                14: 'Kes on pildil?',
            },
            answers: {
                1: {
                    1: "hobune", image: Hobune,
                },
                2: {
                    2: 'kass', image: Kass,
                },
                3: {
                    3: 'lammas', image: Lammas,
                },
                4: {
                    4: 'lehm', image: Lehm,
                },
                5: {
                    5: 'siga', image: Siga,
                },
                6: {
                    6: 'koer', image: Koer,
                },
                7: {
                    7: 'kits', image: Kits,
                },
                8: {
                    8: 'kana', image: Kana,
                },
                9: {
                    9: 'hani', image: Hani,
                },
                10: {
                    10: 'kalkun', image: Kalkun,
                },
                11: {
                    11: 'hamster', image: Hamster,
                },
                12: {
                    12: 'merisiga', image: Merisiga,
                },
                13: {
                    13: 'papagoi', image: Papagoi,
                },
                14: {
                    14: 'jänes', image: Janes,
                },
            },
            correctAnswers: {
                1: 'hobune',
                2: 'kass',
                3: 'lammas',
                4: 'lehm',
                5: 'siga',
                6: 'koer',
                7: 'kits',
                8: 'kana',
                9: 'hani',
                10: 'kalkun',
                11: 'hamster',
                12: 'merisiga',
                13: 'papagoi',
                14: 'jänes',
            },
            correctAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
            result: OneStar,
            grade: 1
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
        this.setState(KoduloomadGuessPictureGame.initState(), () => {
            this.initGame()
        });
    };

    setResult = () => {
        if(this.state.score >= 12) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score >= 10) {
            this.setState({
                result: FourStars,
                grade: 4
            })
        } else if (this.state.score >= 7) {
            this.setState({
                result: ThreeStars,
                grade: 3
            })
        } else if (this.state.score >= 3) {
            this.setState({
                result: TwoStars,
                grade: 2
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
