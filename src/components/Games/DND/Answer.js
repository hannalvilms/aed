import React, {memo} from 'react';
import {useDrag} from 'react-dnd';
export let scoree = 0;

export let Answer = memo(function Food({ name, type, isDropped }) {
    let [{opacity}, drag] = useDrag(() => ({
        item: {name, type},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [name, type]);

    if (drag) {
        addScore();
    }
    // eslint-disable-next-line jsx-a11y/aria-role
    return (<div ref={drag} role="Answer" className="food-item" style={{ opacity }}>
        {isDropped ? <s>{name}</s> : name}
    </div>);
});

export function addScore() {
    if (scoree < 100) {
        scoree++;
        console.log(scoree)
    }
}

export function initial() {
    scoree = 0;
}

export let Score = memo(function Add({score}) {
    addScore();
    console.log(scoree)
    if (score < 100) {
        addScore();
    }
   return (
        <div>
            <h3>{score}</h3>
            <p>{scoree}</p>
        </div>
   );

})

