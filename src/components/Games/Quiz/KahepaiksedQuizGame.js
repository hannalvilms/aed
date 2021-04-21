import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import MaismaaQuestion from "../Quiz/Question/MaismaaQuestion";
import MaismaaAnswer from "../Quiz/Answer/MaismaaAnswer";
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class KahepaiksedQuizGame extends Component {

    state = {
        questions: {
            1: 'Millega on kaetud kahepaiksete keha?',
            2: 'Kus suudavad kahepaiksed elada?',
            3: 'Kuidas hingavad kahepaiksed veel olles?',
            4: 'Kuidas hingavad kahepaiksed maismaal?',
            5: 'Millest toituvad kahepaiksed?',
            6: 'Kus talvituvad kahepaiksed?'
        },
        answers: {
            1: {
                1: 'Soomustega',
                2: 'Limaga',
                3: 'Karvadega',
                4: 'Sulgedega',
            },
            2: {
                1: 'Ainult masimaal',
                2: 'Vees ja maismaal',
                3: 'Ainult vees',
                4: 'Metsas',
            },
            3: {
                1: 'Kopsudega',
                2: 'Silmadega',
                3: 'Jalgade kaudu',
                4: 'Naha kaudu',
            },
            4: {
                1: 'Naha kaudu',
                2: 'Kopsudega',
                3: 'Silmadega',
                4: 'Jalgade kaudu',
            },
            5: {
                1: 'Lindudest',
                2: 'Metsloomadest',
                3: 'Taimedest',
                4: 'Putukatest',
            },
            6: {
                1: 'Veekogu põhjamudas',
                2: 'Maismaal',
                3: 'Mulla sees',
                4: 'Kivi all',
            }
        },
        correctAnswers: {
            1: '2',
            2: '2',
            3: '4',
            4: '2',
            5: '4',
            6: '1'
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
                1: 'Millega on kaetud kahepaiksete keha?',
                2: 'Kus suudavad kahepaiksed elada?',
                3: 'Kuidas hingavad kahepaiksed veel olles?',
                4: 'Kuidas hingavad kahepaiksed maismaal?',
                5: 'Millest toituvad kahepaiksed?',
                6: 'Kus talvituvad kahepaiksed?'
            },
            answers: {
                1: {
                    1: 'Soomustega',
                    2: 'Limaga',
                    3: 'Karvadega',
                    4: 'Sulgedega',
                },
                2: {
                    1: 'Ainult masimaal',
                    2: 'Vees ja maismaal',
                    3: 'Ainult vees',
                    4: 'Metsas',
                },
                3: {
                    1: 'Kopsudega',
                    2: 'Silmadega',
                    3: 'Jalgade kaudu',
                    4: 'Naha kaudu',
                },
                4: {
                    1: 'Naha kaudu',
                    2: 'Kopsudega',
                    3: 'Silmadega',
                    4: 'Jalgade kaudu',
                },
                5: {
                    1: 'Lindudest',
                    2: 'Metsloomadest',
                    3: 'Taimedest',
                    4: 'Putukatest',
                },
                6: {
                    1: 'Veekogu põhjamudas',
                    2: 'Maismaal',
                    3: 'Mulla sees',
                    4: 'Kivi all',
                }
            },
            correctAnswers: {
                1: '2',
                2: '2',
                3: '4',
                4: '2',
                5: '4',
                6: '1'
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
