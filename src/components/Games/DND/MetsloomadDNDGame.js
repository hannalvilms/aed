import React from 'react';
import { useState, useCallback } from 'react';
import { Animal } from './Animal';
import {Answer, scoree} from './Answer';
import { MetsloomadItemTypes } from './MetsloomadItemTypes';
import update from 'immutability-helper';
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export const MetsloomadDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [MetsloomadItemTypes.MAGER], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.SIIL], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.KARU], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.METSKITS], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.METSSIGA], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.ILVES], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.HUNT], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.REBANE], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.PODER], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.ORAV], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'Ilves', type: MetsloomadItemTypes.ILVES },
        { name: 'Metssiga', type: MetsloomadItemTypes.METSSIGA },
        { name: 'Rebane', type: MetsloomadItemTypes.REBANE },
        { name: 'Põder', type: MetsloomadItemTypes.PODER },
        { name: 'Orav', type: MetsloomadItemTypes.ORAV },
        { name: 'Hunt', type: MetsloomadItemTypes.HUNT },
        { name: 'Metskits', type: MetsloomadItemTypes.METSKITS },
        { name: 'Karu', type: MetsloomadItemTypes.KARU },
        { name: 'Siil', type: MetsloomadItemTypes.SIIL },
        { name: 'Mäger', type: MetsloomadItemTypes.MAGER },
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
    if (scoree <= 39) {
        img = FiveStars
    }
    if (scoree > 39 && scoree <= 53) {
        img = FourStars
    }
    if (scoree > 53 && scoree <= 59) {
        img = ThreeStars
    }
    if (scoree > 59 && scoree <= 70) {
        img = TwoStars
    }
    if (scoree > 70) {
        img = OneStar
    }

    return (
        <div className="container-fluid dnd-fluid" >
            <div className="container dnd">
                <h3>Lohista looma nimi õige pildi peale</h3>
                <p>Tulemus: {scoree}</p>
                {score < 10 ?
                    (<>
                        <div className="dnd-content" style={{ overflow: 'hidden', clear: 'both' }}>
                            {animals.map(({ accepts, lastDroppedItem }, index) => (
                        <Animal accept={accepts}
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
                            <p>Hinne:</p>
                            <img alt="result in stars"  className="result-img" src={img}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { MetsloomadDNDGame as default } from './MetsloomadDNDGame';
