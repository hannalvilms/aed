import React from 'react';
import { useState, useCallback } from 'react';
import { ToitumineAnimal } from './ToitumineAnimal';
import { Answer } from './Answer';
import { ToitumineItemTypes } from './ToitumineItemTypes';
import update from 'immutability-helper';

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
        { name: 'Lambatall', type: ToitumineItemTypes.LAMBATALL },
        { name: 'Maimud', type: ToitumineItemTypes.MAIMUD },
        { name: 'Rebasekutsikas', type: ToitumineItemTypes.REBASEKUTSIKAS },
        { name: 'Kanatibu', type: ToitumineItemTypes.KANATIBU },
        { name: 'Kitsetall', type: ToitumineItemTypes.KITSETALL },
        { name: 'Parditibu', type: ToitumineItemTypes.PARDITIBU },
        { name: 'Varss', type: ToitumineItemTypes.VARSS },
        { name: 'Vasikas', type: ToitumineItemTypes.VASIKAS },
        { name: 'Koerakutsikas', type: ToitumineItemTypes.KOERAKUTSIKAS },
        { name: 'Põrsas', type: ToitumineItemTypes.PORSAS },
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
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { ToitumineDNDGame as default } from './ToitumineDNDGame';
