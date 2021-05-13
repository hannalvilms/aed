import React from 'react';
import { memo } from 'react';
import { useDrop } from 'react-dnd';

export const MaismaaloomadAnimal = memo(
    function Animals({ accept, lastDroppedItem, onDrop }) {
        // eslint-disable-next-line no-unused-vars
        const [{ isOver, canDrop }, drop] = useDrop(() => ({
            accept,
            drop: onDrop,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }), [accept, onDrop]);
        return (
            // eslint-disable-next-line jsx-a11y/aria-role
            <div ref={drop} role="Animal" id="Animal"
                 className={ lastDroppedItem ? 'maismaaloomadDND guessed' : 'maismaaloomadDND'}>
            </div>
        );
    }
);
