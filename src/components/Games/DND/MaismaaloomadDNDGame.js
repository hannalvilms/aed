import React from 'react';
import { useState, useCallback } from 'react';
import { MaismaaloomadAnimal } from './MaismaaloomadAnimal';
import {Answer, scoree} from './Answer';
import { MaismaaloomadItemTypes } from './MaismaaloomadItemTypes';
import update from 'immutability-helper';
import OneStar from '../../../images/one-star.png';
import TwoStars from '../../../images/two-stars.png';
import ThreeStars from '../../../images/three-stars.png';
import FourStars from '../../../images/four-stars.png';
import FiveStars from '../../../images/five-stars.png';

export const MaismaaloomadDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [MaismaaloomadItemTypes.NASTIK], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.MUTT], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.METSSIGA], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.MAGER], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.KITS], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.KANA], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.HUNT], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.KASS], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.MERISIGA], lastDroppedItem: null },
        { accepts: [MaismaaloomadItemTypes.SIGA], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'Metssiga', type: MaismaaloomadItemTypes.METSSIGA },
        { name: 'Nastik', type: MaismaaloomadItemTypes.NASTIK },
        { name: 'Kana', type: MaismaaloomadItemTypes.KANA },
        { name: 'Kass', type: MaismaaloomadItemTypes.KASS },
        { name: 'Hunt', type: MaismaaloomadItemTypes.HUNT },
        { name: 'Mutt', type: MaismaaloomadItemTypes.MUTT },
        { name: 'Kits', type: MaismaaloomadItemTypes.KITS },
        { name: 'Merisiga', type: MaismaaloomadItemTypes.MERISIGA },
        { name: 'Siga', type: MaismaaloomadItemTypes.SIGA },
        { name: 'Mäger', type: MaismaaloomadItemTypes.MAGER },
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
        <div className="container-fluid dnd-fluid">
            <div className="container dnd">
                <h3>Lohista looma nimi õige pildi peale</h3>
                <p>Tulemus: {scoree}</p>
                {score < 10 ?
                    (<>
                        <div className="dnd-content" style={{ overflow: 'hidden', clear: 'both' }}>
                            {animals.map(({ accepts, lastDroppedItem }, index) => (
                                <MaismaaloomadAnimal accept={accepts}
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

export { MaismaaloomadDNDGame as default } from './MaismaaloomadDNDGame';
