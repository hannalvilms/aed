import React from 'react';
import { useState, useCallback } from 'react';
import { MaismaaloomadTwoAnimal } from './MaismaaloomadTwoAnimal';
import {Answer, scoree} from './Answer';
import { MaismaaloomadItemTypesTwo } from './MaismaaloomadItemTypes';
import update from 'immutability-helper';
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export const MaismaaloomadTwoDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [MaismaaloomadItemTypesTwo.SIIL], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.REBANE], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.PODER], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.ORAV], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.LAMMAS], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.KOER], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.ILVES], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.HAMSTER], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.KAJAKAS], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypesTwo.HOBUNE], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'hamster', type: MaismaaloomadItemTypesTwo.HAMSTER },
        { name: 'põder', type: MaismaaloomadItemTypesTwo.PODER },
        { name: 'ilves', type: MaismaaloomadItemTypesTwo.ILVES },
        { name: 'orav', type: MaismaaloomadItemTypesTwo.ORAV },
        { name: 'siil', type: MaismaaloomadItemTypesTwo.SIIL },
        { name: 'hobune', type: MaismaaloomadItemTypesTwo.HOBUNE },
        { name: 'kajakas', type: MaismaaloomadItemTypesTwo.KAJAKAS },
        { name: 'lammas', type: MaismaaloomadItemTypesTwo.LAMMAS },
        { name: 'koer', type: MaismaaloomadItemTypesTwo.KOER },
        { name: 'rebane', type: MaismaaloomadItemTypesTwo.REBANE },
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

    return (
        <div className="container-fluid dnd-fluid">
            <div className="container dnd">
                <h3>Lohista looma nimi õige pildi peale</h3>
                <p>Tulemus: {scoree}</p>
                {score < 10 ?
                    (<>
                        <div className="dnd-content" style={{ overflow: 'hidden', clear: 'both' }}>
                            {animals.map(({ accepts, lastDroppedItem }, index) => (
                                <MaismaaloomadTwoAnimal accept={accepts}
                                                     lastDroppedItem={lastDroppedItem}
                                                     onDrop={(item) => {handleDrop(index, item); addScore();}}
                                                     key={index}
                                />))}
                        </div>

                        <div className="food" style={{ overflow: 'hidden', clear: 'both' }}>
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

export { MaismaaloomadTwoDNDGame as default } from './MaismaaloomadTwoDNDGame';
