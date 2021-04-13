import React from 'react';
import { useState, useCallback } from 'react';
import { KoduloomadAnimal } from './KoduloomadAnimal';
import { Answer } from './Answer';
import { KoduloomadItemTypes } from './KoduloomadItemTypes';
import update from 'immutability-helper';

export const KoduloomadDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [KoduloomadItemTypes.KASS], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.KANA], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.LAMMAS], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.LEHM], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.KALKUN], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.HANI], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.PAPAGOI], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.SIGA], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.KITS], lastDroppedItem: null },
        { accepts: [KoduloomadItemTypes.JANES], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'Lehm', type: KoduloomadItemTypes.LEHM },
        { name: 'Kass', type: KoduloomadItemTypes.KASS },
        { name: 'Papagoi', type: KoduloomadItemTypes.PAPAGOI },
        { name: 'Hani', type: KoduloomadItemTypes.HANI },
        { name: 'Kalkun', type: KoduloomadItemTypes.KALKUN },
        { name: 'Janes', type: KoduloomadItemTypes.JANES },
        { name: 'Siga', type: KoduloomadItemTypes.SIGA },
        { name: 'Kana', type: KoduloomadItemTypes.KANA },
        { name: 'Lammas', type: KoduloomadItemTypes.LAMMAS },
        { name: 'Kits', type: KoduloomadItemTypes.KITS },
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState([]);

    const [score, setScore] = useState(0);

    function addScore() {
        setScore(score + 1);
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

    return (
        <div className="container-fluid dnd-fluid">
            <div className="container dnd">
                <h3>Lohista looma nimi õige pildi peale</h3>
                <p>Tulemus: {score}</p>
                {score < 10 ?
                    (<>
                        <div className="dnd-content" style={{ overflow: 'hidden', clear: 'both' }}>
                            {animals.map(({ accepts, lastDroppedItem }, index) => (
                                <KoduloomadAnimal accept={accepts}
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
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { KoduloomadDNDGame as default } from './KoduloomadDNDGame';
