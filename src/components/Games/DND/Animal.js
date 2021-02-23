import React from 'react';
import { memo } from 'react';
import { useDrop } from 'react-dnd';

export const Animal = memo(
    function Animals({ accept, lastDroppedItem, onDrop }) {
        const [{ isOver, canDrop }, drop] = useDrop(() => ({
            accept,
            drop: onDrop,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }), [accept, onDrop]);

        return (
            <div ref={drop} role="Animal" id="Animal"
                 className={ lastDroppedItem ? 'metsloomadDND guessed' : 'metsloomadDND'}>
            </div>
        );
    }
);
