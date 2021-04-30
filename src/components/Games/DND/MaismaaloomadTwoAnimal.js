import React from 'react';
import { memo } from 'react';
import { useDrop } from 'react-dnd';

export const MaismaaloomadTwoAnimal = memo(
    function Animals({ accept, lastDroppedItem, onDrop }) {
        const [{ isOver, canDrop }, drop] = useDrop(() => ({
            accept,
            drop: onDrop,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }), [accept, onDrop]);
        console.log(isOver);
        console.log(canDrop);
        return (
            // eslint-disable-next-line jsx-a11y/aria-role
            <div ref={drop} role="Animal" id="Animal"
                 className={ lastDroppedItem ? 'maismaaloomadTwoDND guessed' : 'maismaaloomadTwoDND'}>
            </div>
        );
    }
);
