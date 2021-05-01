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

export default class ValisehitusQuizGame extends Component {

    state = {
        questions: {
            1: 'Kuidas jaotuvad jäsemed?',
            2: 'Mis juhib kogu keha tegevust?',
            3: 'Mille abil saab pead liigutada?',
            4: 'Mis katavad looma keha?',
            5: 'Mille abil peletab loom putukaid?',
        },
        answers: {
            1: {
                1: 'Keskjäsemeteks',
                2: 'Esijäsemetes',
                3: 'Esi- ja tagajäsemeteks',
                4: 'Tagajäsemeteks',
            },
            2: {
                1: 'Kere',
                2: 'Aju',
                3: 'Jäsemed',
                4: 'Saba',
            },
            3: {
                1: 'Kaela',
                2: 'Saba',
                3: 'Pea',
                4: 'Kõrvade',
            },
            4: {
                1: 'Riidekiud',
                2: 'Soomused',
                3: 'Nahk',
                4: 'Karvad',
            },
            5: {
                1: 'Jäsemete',
                2: 'Kõrvade',
                3: 'Saba',
                4: 'Kaela',
            },
        },
        correctAnswers: {
            1: '3',
            2: '2',
            3: '1',
            4: '4',
            5: '3',
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
                1: 'Kuidas jaotuvad jäsemed?',
                2: 'Mis juhib kogu keha tegevust?',
                3: 'Mille abil saab pead liigutada?',
                4: 'Mis katavad looma keha?',
                5: 'Mille abil peletab loom putukaid?',
            },
            answers: {
                1: {
                    1: 'Keskjäsemeteks',
                    2: 'Esijäsemetes',
                    3: 'Esi- ja tagajäsemeteks',
                    4: 'Tagajäsemeteks',
                },
                2: {
                    1: 'Kere',
                    2: 'Aju',
                    3: 'Jäsemed',
                    4: 'Saba',
                },
                3: {
                    1: 'Kaela',
                    2: 'Saba',
                    3: 'Pea',
                    4: 'Kõrvade',
                },
                4: {
                    1: 'Riidekiud',
                    2: 'Soomused',
                    3: 'Nahk',
                    4: 'Karvad',
                },
                5: {
                    1: 'Jäsemete',
                    2: 'Kõrvade',
                    3: 'Saba',
                    4: 'Kaela',
                },
            },
            correctAnswers: {
                1: '3',
                2: '2',
                3: '1',
                4: '4',
                5: '3',
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
        this.setState(ValisehitusQuizGame.initState(), () => {
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
        if(this.state.score === 5) {
            this.setState({
                result: FiveStars,
                grade: 5
            })
        } else if (this.state.score === 5) {
            this.setState({
                result: FourStars,
                grade: 4
            })
        } else if (this.state.score === 3) {
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
        const gameOver = step === 6;
        if (gameOver) {
            saveResult(this.state.score, this.state.grade, 26);
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
