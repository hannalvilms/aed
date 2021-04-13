import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Siil from "../img/siil.jpg";
import Kass from "../img/kass.jpg";
import Mager from "../img/mager.jpg";
import Merisiga from "../img/merisiga.jpg";
import Siga from "../img/siga.jpg";
import Mutt from "../img/mutt.jpg";
import Kits from "../img/kits.jpg";
import Kana from "../img/kana.jpg";
import Rebane from "../img/rebane.jpg";
import Metskits from "../img/metskits.jpg";
import Hunt from "../img/hunt.jpg";
import Metssiga from "../img/metssiga.jpg";
import Orav from "../img/orav.jpg";
import Janes from "../img/janes.jpg";
import Poder from "../img/poder.jpg";

export default class MaismaaGuessPictureGame extends Component {

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
                15: 'Kes on pildil?'
            },
            answers: {
                1: {
                    1: "jänes", image: Janes,
                },
                2: {
                    2: 'orav', image: Orav,
                },
                3: {
                    3: 'metssiga', image: Metssiga,
                },
                4: {
                    4: 'kana', image: Kana,
                },
                5: {
                    5: 'hunt', image: Hunt,
                },
                6: {
                    6: 'kits', image: Kits,
                },
                7: {
                    7: 'siga', image: Siga,
                },
                8: {
                    8: 'rebane', image: Rebane,
                },
                9: {
                    9: 'kass', image: Kass,
                },
                10: {
                    10: 'mutt', image: Mutt,
                },
                11: {
                    11: 'merisiga', image: Merisiga,
                },
                12: {
                    12: 'mäger', image: Mager,
                },
                13: {
                    13: 'põder', image: Poder,
                },
                14: {
                    14: 'metskits', image: Metskits,
                },
                15: {
                    15: 'siil', image: Siil,
                },
            },
            correctAnswers: {
                1: 'jänes',
                2: 'orav',
                3: 'metssiga',
                4: 'kana',
                5: 'hunt',
                6: 'kits',
                7: 'siga',
                8: 'rebane',
                9: 'kass',
                10: 'mutt',
                11: 'merisiga',
                12: 'mäger',
                13: 'põder',
                14: 'metskits',
                15: 'siil'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
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
                15: 'Kes on pildil?',
            },
            answers: {
                1: {
                    1: "jänes", image: Janes,
                },
                2: {
                    2: 'orav', image: Orav,
                },
                3: {
                    3: 'metssiga', image: Metssiga,
                },
                4: {
                    4: 'kana', image: Kana,
                },
                5: {
                    5: 'hunt', image: Hunt,
                },
                6: {
                    6: 'kits', image: Kits,
                },
                7: {
                    7: 'siga', image: Siga,
                },
                8: {
                    8: 'rebane', image: Rebane,
                },
                9: {
                    9: 'kass', image: Kass,
                },
                10: {
                    10: 'mutt', image: Mutt,
                },
                11: {
                    11: 'merisiga', image: Merisiga,
                },
                12: {
                    12: 'mäger', image: Mager,
                },
                13: {
                    13: 'põder', image: Poder,
                },
                14: {
                    14: 'metskits', image: Metskits,
                },
                15: {
                    15: 'siil', image: Siil,
                },
            },
            correctAnswers: {
                1: 'jänes',
                2: 'orav',
                3: 'metssiga',
                4: 'kana',
                5: 'hunt',
                6: 'kits',
                7: 'siga',
                8: 'rebane',
                9: 'kass',
                10: 'mutt',
                11: 'merisiga',
                12: 'mäger',
                13: 'põder',
                14: 'metskits',
                15: 'siil'
            },
            correctAnswer: 0,
            step: 1,
            score: 0,
            inputValue: '',
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
        this.setState(MaismaaGuessPictureGame.initState(), () => {
            this.initGame()
        });
    };

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
                                    onClick={() => {this.nextStep(step); this.onHandleCheck();}}>Järgmine küsimus</button>
                            </>) : (
                                <div className="finalPage">
                                    {/*Result page and new game*/}
                                    <h1>Testi lõpp!</h1>
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
