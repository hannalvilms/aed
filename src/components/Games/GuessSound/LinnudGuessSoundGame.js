import React, { Component } from 'react';
import PlayAgain from '../../Games/Quiz/PlayAgain';
import GuessSoundQuestion from "../GuessSound/GuessSoundQuestion";
import GuessSoundAnswer from "../GuessSound/GuessSoundAnswer";

import Paasuke from "../img/paasuke.jpg";
import Looke from "../img/looke.jpeg";
import Kuldnokk from "../img/kuldnokk.jpg";
import Toonekurg from "../img/toonekurg.jpg";
import Rasvatihane from "../img/rasvatihane.jpg";
import Leevike from "../img/leevike.jpg";
import Vares from "../img/vares.jpg";
import Rahn from "../img/rähn.jpg";
import Luik from "../img/luik.jpg";
import Hani from "../img/hani.jpg";

import tihane from "./audio/rasvatihane.mp3";
import hallvares from "./audio/hallvares.mp3";
import toonekurg from "./audio/valgetoonekurg.mp3";
import paasuke from "./audio/paasuke.mp3";
import looke from "./audio/looke.mp3";
import leevike from "./audio/leevike.mp3";
import luik from "./audio/luik.mp3";
import rahn from "./audio/rahn.mp3";
import kuldnokk from "./audio/kuldnokk.mp3";
import hani from "./audio/hani.mp3";

import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export default class LinnudGuessSoundGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: {
                1: 'Arva, kellele laul kuulub', 2: 'Arva, kellele laul kuulub', 3: 'Arva, kellele laul kuulub', 4: 'Arva, kellele laul kuulub', 5: 'Arva, kellele laul kuulub', 6: 'Arva, kellele laul kuulub', 7: 'Arva, kellele laul kuulub', 8: 'Arva, kellele laul kuulub', 9: 'Arva, kellele laul kuulub', 10: 'Arva, kellele laul kuulub',
            },
            answers: {
                1: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                2: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                3: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                4: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                5: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                6: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Kuldnokk,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                7: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                8: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                9: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                10: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                }
            },
            names: {
                1: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                2: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                3: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                4: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                5: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                6: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Kuldnokk',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                7: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                8: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                9: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                10: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                }
            },
            correctAnswers: {
                1: '6',
                2: '2',
                3: '4',
                4: '1',
                5: '7',
                6: '5',
                7: '1',
                8: '4',
                9: '7',
                10: '3'
            },
            audio: {
                1: tihane,
                2: hallvares,
                3: toonekurg,
                4: paasuke,
                5: looke,
                6: kuldnokk,
                7: leevike,
                8: rahn,
                9: luik,
                10: hani
            },
            author: {
                1: 'Xeno-canto - Uku Paal, 07.01.2021, Eesti, Tartu',
                2: 'Xeno-canto - Uku Paal, 28.02.2015, Eesti, Saaremaa',
                3: 'Xeno-canto - Tero Linjama, 05.05.2008, Eesti, Lihula',
                4: 'Xeno-canto - Uku Paal, 10.07.2020, Eesti, Muhu',
                5: 'Xeno-canto - Uku Paal, 12.05.2020, Eesti, Hiiumaa',
                6: 'Xeno-canto - Uku Paal, 03.05.2020, Eesti, Hiiumaa',
                7: 'Xeno-canto - Uku Paal, 07.01.2020, Eesti, Tartu',
                8: 'Xeno-canto - Uku Paal, 22.05.2014, Eesti, Häädemeeste',
                9: 'Xeno-canto - Livon, 16.12.2017, Eesti, Metsküla',
                10: 'Xeno-canto - Tero Linjama, 01.05.2008, Eesti, Matsalu',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            play: false,
            result: OneStar,
            grade: 1
        };
    };


//Initial state for restarting the game
    static initState = () => {
        return {
            questions: {
                1: 'Arva, kellele laul kuulub', 2: 'Arva, kellele laul kuulub', 3: 'Arva, kellele laul kuulub', 4: 'Arva, kellele laul kuulub', 5: 'Arva, kellele laul kuulub', 6: 'Arva, kellele laul kuulub', 7: 'Arva, kellele laul kuulub', 8: 'Arva, kellele laul kuulub', 9: 'Arva, kellele laul kuulub', 10: 'Arva, kellele laul kuulub',
            },
            answers: {
                1: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                2: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                3: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                4: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                5: {
                    1: Paasuke,
                    2: Vares,
                    3: Kuldnokk,
                    4: Toonekurg,
                    5: Leevike,
                    6: Rasvatihane,
                    7: Looke,
                    8: Rahn
                },
                6: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Kuldnokk,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                7: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                8: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                9: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                },
                10: {
                    1: Leevike,
                    2: Rasvatihane,
                    3: Hani,
                    4: Rahn,
                    5: Paasuke,
                    6: Vares,
                    7: Luik,
                    8: Toonekurg
                }
            },
            names: {
                1: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                2: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                3: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                4: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                5: {
                    1: 'Pääsuke',
                    2: 'Vares',
                    3: 'Kuldnokk',
                    4: 'Toonekurg',
                    5: 'Leevike',
                    6: 'Rasvatihane',
                    7: 'Lõoke',
                    8: 'Rähn'
                },
                6: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Kuldnokk',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                7: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                8: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                9: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                },
                10: {
                    1: 'Leevike',
                    2: 'Rasvatihane',
                    3: 'Hani',
                    4: 'Rähn',
                    5: 'Pääsuke',
                    6: 'Vares',
                    7: 'Luik',
                    8: 'Toonekurg'
                }
            },
            correctAnswers: {
                1: '6',
                2: '2',
                3: '4',
                4: '1',
                5: '7',
                6: '5',
                7: '1',
                8: '4',
                9: '7',
                10: '3'
            },
            audio: {
                1: tihane,
                2: hallvares,
                3: toonekurg,
                4: paasuke,
                5: looke,
                6: kuldnokk,
                7: leevike,
                8: rahn,
                9: luik,
                10: hani
            },
            author: {
                1: 'Xeno-canto - Uku Paal, 07.01.2021, Eesti, Tartu',
                2: 'Xeno-canto - Uku Paal, 28.02.2015, Eesti, Saaremaa',
                3: 'Xeno-canto - Tero Linjama, 05.05.2008, Eesti, Lihula',
                4: 'Xeno-canto - Uku Paal, 10.07.2020, Eesti, Muhu',
                5: 'Xeno-canto - Uku Paal, 12.05.2020, Eesti, Hiiumaa',
                6: 'Xeno-canto - Uku Paal, 03.05.2020, Eesti, Hiiumaa',
                7: 'Xeno-canto - Uku Paal, 07.01.2020, Eesti, Tartu',
                8: 'Xeno-canto - Uku Paal, 22.05.2014, Eesti, Häädemeeste',
                9: 'Xeno-canto - Livon, 16.12.2017, Eesti, Metsküla',
                10: 'Xeno-canto - Tero Linjama, 01.05.2008, Eesti, Matsalu',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            play: false,
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

    setResult = () => {
        if(this.state.score >= 9) {
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
        } else if (this.state.score >= 3) {
            this.setState({
                result: TwoStars,
                grade: 2
            })
        }
    }

    togglePlay = () => {
        let myAudio = document.getElementById("gameAudio");
        myAudio.load();
        myAudio.pause();
    };

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score, audio, author, names } = this.state;
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
                                    name={names[step]}
                                    step={step}
                                    checkAnswer={this.checkAnswer}
                                    correctAnswer={correctAnswer}
                                    clickedAnswer={clickedAnswer}
                                />
                                {/*Next question button*/}
                                <audio   ref="audio_tag" id="gameAudio"
                                         className="audio"
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
                                    onClick={() => {
                                        this.nextStep(step);
                                        this.togglePlay();
                                        this.setResult();
                                    }}>
                                    Järgmine
                                </button>

                            </>) : (
                                <div className="finalPage">
                                    {/*Result page*/}
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
        );
    }
}
