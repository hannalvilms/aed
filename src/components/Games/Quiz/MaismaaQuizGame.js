import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import MaismaaAnswer from "../Quiz/Answer/MaismaaAnswer";

export default class MaismaaQuizGame extends Component {

    state = {
        questions: {
            1: 'When was AngularJS initially released?',
            2: 'Who developed AngularJS?'
        },
        answers: {
            1: {
                1: '2010',
                2: '2011',
                3: '2012',
                4: '2013',
                5: '2014',
                6: '2015'
            },
            2: {
                1: 'Facebook',
                2: 'Google',
                3: 'Twitter',
                4: '2013',
                5: '2014',
                6: '2015'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    };

    static initState = () => {
        return {
            questions: {
                1: 'When was AngularJS initially released?',
                2: 'Who developed AngularJS?'
            },
            answers: {
                1: {
                    1: '2010',
                    2: '2011',
                    3: '2012',
                    4: '2013',
                    5: '2014',
                    6: '2015'
                },
                2: {
                    1: 'Facebook',
                    2: 'Google',
                    3: 'Twitter',
                    4: '2013',
                    5: '2014',
                    6: '2015'
                }
            },
            correctAnswers: {
                1: '1',
                2: '2'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0
        };
    };

    initGame = () => {
        this.setState({
            newGame: true
        });
    };

    // Checks if the answer is correct
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
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

    resetGame = () => {
        this.setState(MaismaaQuizGame.initState(), () => {
            this.initGame()
        });
    };

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="container-fluid quiz-fluid">
                <div className="container quiz">
                    <div className="quiz-content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                <MaismaaQuestion
                                    question={questions[step]}
                                />
                                <p>Küsimus {this.state.step}/{Object.keys(questions).length}</p>
                                <MaismaaAnswer
                                    answer={answers[step]}
                                    step={step}
                                    checkAnswer={this.checkAnswer}
                                    correctAnswer={correctAnswer}
                                    clickedAnswer={clickedAnswer}
                                />
                                <button
                                    className="NextStep"
                                    disabled={
                                        !(clickedAnswer && Object.keys(questions).length >= step)
                                    }
                                    onClick={() => this.nextStep(step)}>Järgmine küsimus</button>
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
        );
    }
}