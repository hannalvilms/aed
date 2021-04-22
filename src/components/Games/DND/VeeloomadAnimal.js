import React from 'react';
import { memo } from 'react';
import { useDrop } from 'react-dnd';

export const VeeloomadAnimal = memo(
    function Animals({ accept, lastDroppedItem, onDrop }) {
        // eslint-disable-next-line jsx-a11y/aria-role
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
                 className={ lastDroppedItem ? 'veeloomadDND guessed' : 'veeloomadDND'}>
            </div>
        );
    }
);
