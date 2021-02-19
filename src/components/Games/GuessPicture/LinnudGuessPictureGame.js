import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import GuessPictureAnswer from "./GuessPictureAnswer";
import Bird from "../../../images/bird.jpg";
import Bird2 from "../../../images/bird2.jpg";


export default class LinnudGuessPictureGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: {
                1: 'Kes on pildil?',
                2: 'Kes on pildil?'
            },
            answers: {
                1: {
                    1: "lind",
                    image: Bird,
                },
                2: {
                    2: 'lind2',
                    image: Bird2,
                }
            },
            correctAnswers: {
                1: 'lind',
                2: 'lind2'
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
                2: 'Kes on pildil?'
            },
            answers: {
                1: {
                    1: "lind",
                    image: Bird,
                },
                2: {
                    2: 'lind2',
                    image: Bird2,
                }
            },
            correctAnswers: {
                1: 'lind',
                2: 'lind2'
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
        if(correctAnswers[step] === this.state.inputValue){
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
