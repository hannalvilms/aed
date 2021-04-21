import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import MaismaaAnswer from "../Quiz/Answer/MaismaaAnswer";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class KahepaiksedSecondQuizGame extends Component {

    state = {
        questions: {
            1: 'Kuidas liiguvad maod?',
            2: 'Millega uurivad maod ja sisalikud ümbrust?',
            3: 'Millest toituvad maod ja sisalikd?',
            4: 'Kes on eestis elav mürkmadu?',
            5: 'Millega on kaetud madude ja sisalike keha?',
            6: 'Kuhu munevad maod ja sisalikud?'
        },
        answers: {
            1: {
                1: 'Lennates',
                2: 'Kõndides',
                3: 'Joostes',
                4: 'Roomates',
            },
            2: {
                1: 'Kaheharulise keelega',
                2: 'Vurrudega',
                3: 'Üheharulise keelega',
                4: 'Jalgadega',
            },
            3: {
                1: 'Taimedest',
                2: 'Metsloomadest',
                3: 'Pisiloomadest',
                4: 'Lindudest',
            },
            4: {
                1: 'Nastik',
                2: 'Rästik',
                3: 'Vaskuss',
                4: 'Vihmauss',
            },
            5: {
                1: 'Kuivade soomustega',
                2: 'Limaga',
                3: 'Märgade soomustega',
                4: 'Karvadega',
            },
            6: {
                1: 'Vette',
                2: 'Maismaale',
                3: 'Ei munegi',
                4: 'Puu otsa',
            }
        },
        correctAnswers: {
            1: '4',
            2: '1',
            3: '3',
            4: '2',
            5: '1',
            6: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        result: OneStar
    };

//Initial state for restarting the game
    static initState = () => {
        return {
            questions: {
                1: 'Kuidas liiguvad maod?',
                2: 'Millega uurivad maod ja sisalikud ümbrust?',
                3: 'Millest toituvad maod ja sisalikd?',
                4: 'Kes on eestis elav mürkmadu?',
                5: 'Millega on kaetud madude ja sisalike keha?',
                6: 'Kuhu munevad maod ja sisalikud?'
            },
            answers: {
                1: {
                    1: 'Lennates',
                    2: 'Kõndides',
                    3: 'Joostes',
                    4: 'Roomates',
                },
                2: {
                    1: 'Kaheharulise keelega',
                    2: 'Vurrudega',
                    3: 'Üheharulise keelega',
                    4: 'Jalgadega',
                },
                3: {
                    1: 'Taimedest',
                    2: 'Metsloomadest',
                    3: 'Pisiloomadest',
                    4: 'Lindudest',
                },
                4: {
                    1: 'Nastik',
                    2: 'Rästik',
                    3: 'Vaskuss',
                    4: 'Vihmauss',
                },
                5: {
                    1: 'Kuivade soomustega',
                    2: 'Limaga',
                    3: 'Märgade soomustega',
                    4: 'Karvadega',
                },
                6: {
                    1: 'Vette',
                    2: 'Maismaale',
                    3: 'Ei munegi',
                    4: 'Puu otsa',
                }
            },
            correctAnswers: {
                1: '4',
                2: '1',
                3: '3',
                4: '2',
                5: '1',
                6: '2'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            result: OneStar
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
        this.setState(KahepaiksedSecondQuizGame.initState(), () => {
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
                result: FiveStars
            })
        } else if (this.state.score === 5) {
            this.setState({
                result: FourStars
            })
        } else if (this.state.score === 4 || this.state.score === 3) {
            this.setState({
                result: ThreeStars
            })
        } else if (this.state.score === 2) {
            this.setState({
                result: TwoStars
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
