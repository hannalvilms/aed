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

export default class KaladQuizGame extends Component {

    state = {
        questions: {
            1: 'Kalade keha katavad…',
            2: 'Millele aitab lima kaasa?',
            3: 'Mille abil hingavad kalad?',
            4: 'Millest toituvad kalad?',
            5: 'Kuidas magavad kalad?',
            6: 'Mille abil liiguvad kalad?'
        },
        answers: {
            1: {
                1: 'ainult soomused.',
                2: 'soomused ja lima.',
                3: 'ainult lima.',
                4: 'karvad.',
            },
            2: {
                1: 'Söömisele',
                2: 'Kudemisele',
                3: 'Hingamisele',
                4: 'Ujumisele',
            },
            3: {
                1: 'Kopsude',
                2: 'Lõpuste',
                3: 'Naha',
                4: 'Nina',
            },
            4: {
                1: 'Veetaimede osadest',
                2: 'Lindudest',
                3: 'Suurtest kaladest',
                4: 'Lihast',
            },
            5: {
                1: 'Ei magagi',
                2: 'Lahtiste silmadega',
                3: 'Kinniste silmadega',
                4: 'Ühe lahtise silmaga',
            },
            6: {
                1: 'Kere',
                2: 'Jalgade',
                3: 'Lõpuste',
                4: 'Uimede ja saba',
            }
        },
        correctAnswers: {
            1: '2',
            2: '4',
            3: '2',
            4: '1',
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
                1: 'Kalade keha katavad…',
                2: 'Millele aitab lima kaasa?',
                3: 'Mille abil hingavad kalad?',
                4: 'Millest toituvad kalad?',
                5: 'Kuidas magavad kalad?',
                6: 'Mille abil liiguvad kalad?'
            },
            answers: {
                1: {
                    1: 'ainult soomused.',
                    2: 'soomused ja lima.',
                    3: 'ainult lima.',
                    4: 'karvad.',
                },
                2: {
                    1: 'Söömisele',
                    2: 'Kudemisele',
                    3: 'Hingamisele',
                    4: 'Ujumisele',
                },
                3: {
                    1: 'Kopsude',
                    2: 'Lõpuste',
                    3: 'Naha',
                    4: 'Nina',
                },
                4: {
                    1: 'Veetaimede osadest',
                    2: 'Lindudest',
                    3: 'Suurtest kaladest',
                    4: 'Lihast',
                },
                5: {
                    1: 'Ei magagi',
                    2: 'Lahtiste silmadega',
                    3: 'Kinniste silmadega',
                    4: 'Ühe lahtise silmaga',
                },
                6: {
                    1: 'Kere',
                    2: 'Jalgade',
                    3: 'Lõpuste',
                    4: 'Uimede ja saba',
                }
            },
            correctAnswers: {
                1: '2',
                2: '4',
                3: '2',
                4: '1',
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
    };

//Set state for new game
    initGame = () => {
        this.setState({
            newGame: true
        });
    };

//Reset the game
    resetGame = () => {
        this.setState(KaladQuizGame.initState(), () => {
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
            saveResult(this.state.score, this.state.grade, 6);
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
