import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import MaismaaAnswer from "../Quiz/Answer/MaismaaAnswer";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class ToitumineQuizGame extends Component {

    state = {
        questions: {
            1: 'Mis toiduline on ahven?',
            2: 'Mis toiduline on mesilane?',
            3: 'Mis toiduline on siil?',
            4: 'Mis toiduline on metskits?',
            5: 'Mis toiduline on lammas?',
            6: 'Mis toiduline on hunt?',
            7: 'Mis toiduline on rästik?',
            8: 'Mis toiduline on rebane?',
            9: 'Mis toiduline on põder?',
            10: 'Mis toiduline on rähn?'
        },
        answers: {
            1: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            2: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            3: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            4: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            5: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            6: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            7: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            8: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            9: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            },
            10: {
                1: 'Taimtoiduline',
                2: 'Loomtoiduline',
                3: 'Segatoiduline',
                4: 'Ei söögi midagi',
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '3',
            4: '1',
            5: '1',
            6: '2',
            7: '2',
            8: '3',
            9: '1',
            10: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        result: OneStar,
        grade: 1
    };

//Initial state for restarting the game
    static initState = () => {
        return {
            questions: {
                1: 'Mis toiduline on ahven?',
                2: 'Mis toiduline on mesilane?',
                3: 'Mis toiduline on siil?',
                4: 'Mis toiduline on metskits?',
                5: 'Mis toiduline on lammas?',
                6: 'Mis toiduline on hunt?',
                7: 'Mis toiduline on rästik?',
                8: 'Mis toiduline on rebane?',
                9: 'Mis toiduline on põder?',
                10: 'Mis toiduline on rähn?'
            },
            answers: {
                1: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                2: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                3: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                4: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                5: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                6: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                7: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                8: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                9: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                },
                10: {
                    1: 'Taimtoiduline',
                    2: 'Loomtoiduline',
                    3: 'Segatoiduline',
                    4: 'Ei söögi midagi',
                }
            },
            correctAnswers: {
                1: '2',
                2: '1',
                3: '3',
                4: '1',
                5: '1',
                6: '2',
                7: '2',
                8: '3',
                9: '1',
                10: '3'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            result: OneStar,
            grade: 1
        };
    };

//Set state for new game
    initGame = () => {
        this.setState({
            newGame: true
        });
    };

//Reset the game
    resetGame = () => {
        this.setState(ToitumineQuizGame.initState(), () => {
            this.initGame()
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

    setResult = () => {
        if(this.state.score >= 8) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score >= 6) {
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

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="container-fluid quiz-fluid">
                <div className="container quiz">
                    <div className="quiz-content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                {/*Questions*/}
                                <MaismaaQuestion
                                    question={questions[step]}
                                />
                                <p>Küsimus {this.state.step}/{Object.keys(questions).length}</p>
                                {/*Answers*/}
                                <MaismaaAnswer
                                    answer={answers[step]}
                                    step={step}
                                    checkAnswer={this.checkAnswer}
                                    correctAnswer={correctAnswer}
                                    clickedAnswer={clickedAnswer}
                                />
                                {/*Next question button*/}
                                <button
                                    className="NextStep"
                                    disabled={
                                        !(clickedAnswer && Object.keys(questions).length >= step)
                                    }
                                    onClick={() => {
                                        this.nextStep(step);
                                        this.setResult();
                                    }}>Järgmine küsimus</button>
                            </>) : (
                                <div className="finalPage">
                                    {/*Result page*/}
                                    <h1>Testi lõpp!</h1>
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
        );
    }
}
