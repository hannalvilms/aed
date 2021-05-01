import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Kiil from "../img/kiil.jpg";
import Saarmas from "../img/saarmas.jpg";
import Kobras from "../img/kobras.jpg";
import Liuskur from "../img/liuskur.jpg";
import Ujur from "../img/ujur.jpeg";
import Vesiamblik from "../img/vesiamblik.jpeg";
import Huljes from "../img/hyljes.jpg";
import Vaal from "../img/vaal.jpg";
import Vesihark from "../img/vesihark.jpeg";
import Delfiin from "../img/delfiin.jpg";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';
import {saveResult} from "../../../saveResult";

export default class VeeloomadGuessPictureGame extends Component {

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
                    1: "saarmas", image: Saarmas,
                },
                2: {
                    2: 'kobras', image: Kobras,
                },
                3: {
                    3: 'kiil', image: Kiil,
                },
                4: {
                    4: 'liuskur', image: Liuskur,
                },
                5: {
                    5: 'hüljes', image: Huljes,
                },
                6: {
                    6: 'vaal', image: Vaal,
                },
                7: {
                    7: 'ujur', image: Ujur,
                },
                8: {
                    8: 'vesiämblik', image: Vesiamblik,
                },
                9: {
                    9: 'delfiin', image: Delfiin,
                },
                10: {
                    10: 'vesihark', image: Vesihark,
                },
            },
            correctAnswers: {
                1: 'saarmas',
                2: 'kobras',
                3: 'kiil',
                4: 'liuskur',
                5: 'hüljes',
                6: 'vaal',
                7: 'ujur',
                8: 'vesiämblik',
                9: 'delfiin',
                10: 'vesihark',
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
                    1: "saarmas", image: Saarmas,
                },
                2: {
                    2: 'kobras', image: Kobras,
                },
                3: {
                    3: 'kiil', image: Kiil,
                },
                4: {
                    4: 'liuskur', image: Liuskur,
                },
                5: {
                    5: 'hüljes', image: Huljes,
                },
                6: {
                    6: 'vaal', image: Vaal,
                },
                7: {
                    7: 'ujur', image: Ujur,
                },
                8: {
                    8: 'vesiämblik', image: Vesiamblik,
                },
                9: {
                    9: 'delfiin', image: Delfiin,
                },
                10: {
                    10: 'vesihark', image: Vesihark,
                },
            },
            correctAnswers: {
                1: 'saarmas',
                2: 'kobras',
                3: 'kiil',
                4: 'liuskur',
                5: 'hüljes',
                6: 'vaal',
                7: 'ujur',
                8: 'vesiämblik',
                9: 'delfiin',
                10: 'vesihark',
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
        this.setState(VeeloomadGuessPictureGame.initState(), () => {
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
            saveResult(this.state.score, this.state.grade, 28);
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
