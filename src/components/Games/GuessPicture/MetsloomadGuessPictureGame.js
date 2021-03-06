import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Karu from "../img/karu.jpg";
import Mager from "../img/mager.jpg";
import Rebane from "../img/rebane.jpg";
import Metskits from "../img/metskits.jpg";
import Hunt from "../img/hunt.jpg";
import Orav from "../img/orav.jpg";
import Metssiga from "../img/metssiga.jpg";
import Halljanes from "../img/kyylik1.jpg";
import Ilves from "../img/ilves.jpg";
import Poder from "../img/poder.jpg";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';
import {saveResult} from "../../../saveResult";

export default class MetsloomadGuessPictureGame extends Component {

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
            },
            answers: {
                1: {
                    1: "karu", image: Karu,
                },
                2: {
                    2: 'põder', image: Poder,
                },
                3: {
                    3: 'ilves', image: Ilves,
                },
                4: {
                    4: 'metssiga', image: Metssiga,
                },
                5: {
                    5: 'metskits', image: Metskits,
                },
                6: {
                    6: 'rebane', image: Rebane,
                },
                7: {
                    7: 'hunt', image: Hunt,
                },
                8: {
                    8: 'orav', image: Orav,
                },
                9: {
                    9: 'mäger', image: Mager,
                },
                10: {
                    10: 'halljänes', image: Halljanes,
                },
            },
            correctAnswers: {
                1: 'karu',
                2: 'põder',
                3: 'ilves',
                4: 'metssiga',
                5: 'metskits',
                6: 'rebane',
                7: 'hunt',
                8: 'orav',
                9: 'mäger',
                10: 'halljänes',
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
            },
            answers: {
                1: {
                    1: "karu", image: Karu,
                },
                2: {
                    2: 'põder', image: Poder,
                },
                3: {
                    3: 'ilves', image: Ilves,
                },
                4: {
                    4: 'metssiga', image: Metssiga,
                },
                5: {
                    5: 'metskits', image: Metskits,
                },
                6: {
                    6: 'rebane', image: Rebane,
                },
                7: {
                    7: 'hunt', image: Hunt,
                },
                8: {
                    8: 'orav', image: Orav,
                },
                9: {
                    9: 'mäger', image: Mager,
                },
                10: {
                    10: 'halljänes', image: Halljanes,
                },
            },
            correctAnswers: {
                1: 'karu',
                2: 'põder',
                3: 'ilves',
                4: 'metssiga',
                5: 'metskits',
                6: 'rebane',
                7: 'hunt',
                8: 'orav',
                9: 'mäger',
                10: 'halljänes',
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
        this.setState(MetsloomadGuessPictureGame.initState(), () => {
            this.initGame()
        });
    };

    setResult = () => {
        if(this.state.score >= 8) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score >= 7) {
            this.setState({
                result: FourStars,
                grade: 4
            })
        } else if (this.state.score >= 5) {
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

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        const gameOver = step === 11;
        if (gameOver) {
            saveResult(this.state.score, this.state.grade, 19);
        }
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
