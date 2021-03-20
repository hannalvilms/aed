import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import GuessSoundQuestion from "../GuessSound/GuessSoundQuestion";
import GuessSoundAnswer from "../GuessSound/GuessSoundAnswer";
import Bird from "../../../images/bird.jpg";
import Bird2 from "../../../images/bird2.jpg";
import tihane from "./audio/rasvatihane.mp3";
import hallvares from "./audio/hallvares.mp3";

export default class LinnudGuessSoundGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: {
                1: 'Arva, kellele laul kuulub',
                2: 'Arva, kellele laul kuulub'
            },
            answers: {
                1: {
                    1: Bird,
                    2: Bird2,
                    3: Bird,
                    4: Bird,
                    5: Bird,
                    6: Bird,
                    7: Bird,
                    8: Bird
                },
                2: {
                    1: Bird,
                    2: Bird2,
                    3: Bird,
                    4: Bird,
                    5: Bird,
                    6: Bird,
                    7: Bird,
                    8: Bird
                }
            },
            correctAnswers: {
                1: '1',
                2: '2'
            },
            audio: {
                1: tihane,
                2: hallvares,
            },
            author: {
                1: 'Xeno-canto - Uku Paal, 07.01.2021, Eesti, Tartu',
                2: 'Xeno-canto - Uku Paal, 28.02.2015, Eesti, Saaremaa',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            play: false
        };
    };


//Initial state for restarting the game
    static initState = () => {
        return {
            questions: {
                1: 'Arva, kellele laul kuulub',
                2: 'Arva, kellele laul kuulub'
            },
            answers: {
                1: {
                    1: Bird,
                    2: Bird2,
                    3: Bird,
                    4: Bird,
                    5: Bird,
                    6: Bird,
                    7: Bird,
                    8: Bird
                },
                2: {
                    1: Bird,
                    2: Bird2,
                    3: Bird,
                    4: Bird,
                    5: Bird,
                    6: Bird,
                    7: Bird,
                    8: Bird
                }
            },
            correctAnswers: {
                1: '1',
                2: '2'
            },
            audio: {
                1: tihane,
                2: hallvares,
            },
            author: {
                1: 'Xeno-canto - Uku Paal, 07.01.2021, Eesti, Tartu',
                2: 'Xeno-canto - Uku Paal, 28.02.2015, Eesti, Saaremaa',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0
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
        this.setState(LinnudGuessSoundGame.initState(), () => {
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

    togglePlay = () => {
        let myAudio = document.getElementById("gameAudio");
        myAudio.load();
        myAudio.pause();
    };

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score, audio, author } = this.state;
        return(
            <div className="container-fluid guess-sound-fluid">
                <div className="container guess-sound">
                    <div className="guess-sound-content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                {/*Questions*/}
                                <GuessSoundQuestion
                                    question={questions[step]}
                                />
                                <p>Küsimus {this.state.step}/{Object.keys(questions).length}</p>
                                {/*Answers*/}
                                <GuessSoundAnswer
                                    answer={answers[step]}
                                    step={step}
                                    checkAnswer={this.checkAnswer}
                                    correctAnswer={correctAnswer}
                                    clickedAnswer={clickedAnswer}
                                />
                                {/*Next question button*/}
                                <audio   ref="audio_tag" id="gameAudio"
                                         className="audio"
                                         autoPlay={false}
                                         controls={true}>
                                    <source type="audio/mp3" src={audio[step]} />
                                </audio>
                                <p className="author">
                                    Autor: {author[step]}
                                </p>

                                <button
                                    className="NextStep"
                                    disabled={
                                        !(clickedAnswer && Object.keys(questions).length >= step)
                                    }
                                    onClick={() => {this.nextStep(step); this.togglePlay()}}>
                                    Järgmine
                                </button>

                            </>) : (
                                <div className="finalPage">
                                    {/*Result page*/}
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
