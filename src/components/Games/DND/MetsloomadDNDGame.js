import React from 'react';
import { useState, useCallback } from 'react';
import { Animal } from './Animal';
import { Answer } from './Answer';
import { MetsloomadItemTypes } from './MetsloomadItemTypes';
import update from 'immutability-helper';

export const MetsloomadDNDGame = () => {
    const [animals, setAnimals] = useState([
        { accepts: [MetsloomadItemTypes.LIND], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.SIIL], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.KARU], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.LEHM], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.LIND2], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.ILVES], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.HIRV], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.REBANE], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.PODER], lastDroppedItem: null },
        { accepts: [MetsloomadItemTypes.ORAV], lastDroppedItem: null },
    ]);

    const [answers] = useState([
        { name: 'Ilves', type: MetsloomadItemTypes.ILVES },
        { name: 'Hirv', type: MetsloomadItemTypes.HIRV },
        { name: 'Rebane', type: MetsloomadItemTypes.REBANE },
        { name: 'Põder', type: MetsloomadItemTypes.PODER },
        { name: 'Orav', type: MetsloomadItemTypes.ORAV },
        { name: 'Lind', type: MetsloomadItemTypes.LIND },
        { name: 'Siil', type: MetsloomadItemTypes.SIIL },
        { name: 'Karu', type: MetsloomadItemTypes.KARU },
        { name: 'Lehm', type: MetsloomadItemTypes.LEHM },
        { name: 'Lind2', type: MetsloomadItemTypes.LIND2 },
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
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { MetsloomadDNDGame as default } from './MetsloomadDNDGame';
