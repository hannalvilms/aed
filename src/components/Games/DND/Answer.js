import React from 'react';
import { memo } from 'react';
import { useDrag } from 'react-dnd';

export const Answer = memo(function Food({ name, type, isDropped }) {
    const [{ opacity }, drag] = useDrag(() => ({
        item: { name, type },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [name, type]);

    return (<div ref={drag} role="Answer" className="food-item" style={{ opacity }}>
        {isDropped ? <s>{name}</s> : name}
    </div>);
});
