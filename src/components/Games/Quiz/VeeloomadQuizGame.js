import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import MaismaaAnswer from "../Quiz/Answer/MaismaaAnswer";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';
import {saveResult} from "../../../saveResult";

export default class KahepaiksedQuizGame extends Component {

    state = {
        questions: {
            1: 'Milline on veeloomade karvkate?',
            2: 'Mis on veeloomade varvaste vahel?',
            3: 'Kus poegivad veeloomad?',
            4: 'Kuhu ehitavad veeloomad pesa?',
            5: 'Kes on maailma suurim imetaja?',
            6: 'Kus paljunevad vaalad?'
        },
        answers: {
            1: {
                1: 'Okkaline',
                2: 'Limane',
                3: 'Rasune',
                4: 'Soomuseline',
            },
            2: {
                1: 'Ujunahad',
                2: 'Kõrvad',
                3: 'Vurrud',
                4: 'Sõrmed',
            },
            3: {
                1: 'Vees',
                2: 'Põhjamudas',
                3: 'Kuival maal',
                4: 'Kivisel pinnal',
            },
            4: {
                1: 'Kivide vahele',
                2: 'Põhjamutta',
                3: 'Vette',
                4: 'Kuivale maale',
            },
            5: {
                1: 'Hüljes',
                2: 'Vaal',
                3: 'Hai',
                4: 'Delfiin',
            },
            6: {
                1: 'Maismaal',
                2: 'Kivide vahel',
                3: 'Põhjamudas',
                4: 'Vees',
            }
        },
        correctAnswers: {
            1: '3',
            2: '1',
            3: '3',
            4: '4',
            5: '2',
            6: '4'
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
                1: 'Milline on veeloomade karvkate?',
                2: 'Mis on veeloomade varvaste vahel?',
                3: 'Kus poegivad veeloomad?',
                4: 'Kuhu ehitavad veeloomad pesa?',
                5: 'Kes on maailma suurim imetaja?',
                6: 'Kus paljunevad vaalad?'
            },
            answers: {
                1: {
                    1: 'Okkaline',
                    2: 'Limane',
                    3: 'Rasune',
                    4: 'Soomuseline',
                },
                2: {
                    1: 'Ujunahad',
                    2: 'Kõrvad',
                    3: 'Vurrud',
                    4: 'Sõrmed',
                },
                3: {
                    1: 'Vees',
                    2: 'Põhjamudas',
                    3: 'Kuival maal',
                    4: 'Kivisel pinnal',
                },
                4: {
                    1: 'Kivide vahele',
                    2: 'Põhjamutta',
                    3: 'Vette',
                    4: 'Kuivale maale',
                },
                5: {
                    1: 'Hüljes',
                    2: 'Vaal',
                    3: 'Hai',
                    4: 'Delfiin',
                },
                6: {
                    1: 'Maismaal',
                    2: 'Kivide vahel',
                    3: 'Põhjamudas',
                    4: 'Vees',
                }
            },
            correctAnswers: {
                1: '3',
                2: '1',
                3: '3',
                4: '4',
                5: '2',
                6: '4'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
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
        this.setState(KahepaiksedQuizGame.initState(), () => {
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
        if(this.state.score === 6) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score === 5) {
            this.setState({
                result: FourStars,
                grade: 4
            })
        } else if (this.state.score === 4 || this.state.score === 3) {
            this.setState({
                result: ThreeStars,
                grade: 3
            })
        } else if (this.state.score === 2) {
            this.setState({
                result: TwoStars,
                grade: 2
            })
        }
    }


    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        const gameOver = step === 7;
        if (gameOver) {
            saveResult(this.state.score, this.state.grade, 29);
        }
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
