import React from 'react';
import { useState, useCallback } from 'react';
import { ToitumineAnimal } from './ToitumineAnimal';
import {Answer, scoree} from './Answer';
import { ToitumineItemTypes } from './ToitumineItemTypes';
import update from 'immutability-helper';
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';
import {saveResult} from "../../../saveResult";

export const ToitumineDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [ToitumineItemTypes.VASIKAS], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.LAMBATALL], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.PORSAS], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.KANATIBU], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.VARSS], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.KOERAKUTSIKAS], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.MAIMUD], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.REBASEKUTSIKAS], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.PARDITIBU], lastDroppedItem: null },
        { accepts: [ToitumineItemTypes.KITSETALL], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'lambatall', type: ToitumineItemTypes.LAMBATALL },
        { name: 'maimud', type: ToitumineItemTypes.MAIMUD },
        { name: 'rebasekutsikas', type: ToitumineItemTypes.REBASEKUTSIKAS },
        { name: 'kanatibu', type: ToitumineItemTypes.KANATIBU },
        { name: 'kitsetall', type: ToitumineItemTypes.KITSETALL },
        { name: 'parditibu', type: ToitumineItemTypes.PARDITIBU },
        { name: 'varss', type: ToitumineItemTypes.VARSS },
        { name: 'vasikas', type: ToitumineItemTypes.VASIKAS },
        { name: 'koerakutsikas', type: ToitumineItemTypes.KOERAKUTSIKAS },
        { name: 'põrsas', type: ToitumineItemTypes.PORSAS },
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState([]);

    const [score, setScore] = useState(0);

    function addScore() {
        setScore(score + 1);
        return null;
    }

    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }

    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setAnimals(update(animals, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, animals]);

    let img = FiveStars
    let grade = 1
    if (scoree <= 39) {
        img = FiveStars
        grade = 5
    }
    if (scoree > 39 && scoree <= 53) {
        img = FourStars
        grade = 4
    }
    if (scoree > 53 && scoree <= 59) {
        img = ThreeStars
        grade = 3
    }
    if (scoree > 59 && scoree <= 70) {
        img = TwoStars
        grade = 2
    }
    if (scoree > 70) {
        img = OneStar
        grade = 1
    }

    const gameOver = score===10;
    if (gameOver) {
        saveResult(scoree, grade, 7);
    }

    return (
        <div className="container-fluid dnd-fluid">
            <div className="container dnd">
                <h3>Lohista looma nimi õige pildi peale</h3>
                <p>Tulemus: {scoree}</p>
                {score < 10 ?
                    (<>
                        <div className="dnd-content" style={{ overflow: 'hidden', clear: 'both' }}>
                            {animals.map(({ accepts, lastDroppedItem }, index) => (
                                <ToitumineAnimal accept={accepts}
                                                 lastDroppedItem={lastDroppedItem}
                                                 onDrop={(item) => {handleDrop(index, item); addScore();}}
                                                 key={index}
                                />))}
                        </div>

                        <div className="food toitumine" style={{ overflow: 'hidden', clear: 'both' }}>
                            {answers.map(({ name, type }, index) => (
                                <Answer name={name}
                                        type={type}
                                        isDropped={isDropped(name)}
                                        key={index}
                                />))
                            }
                        </div>
                    </>) : (
                        <div className="finalPage">
                            <h1>Tubli!</h1>
                            <p>Hinne: {grade}</p>
                            <img alt="result in stars"  className="result-img" src={img}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { ToitumineDNDGame as default } from './ToitumineDNDGame';
