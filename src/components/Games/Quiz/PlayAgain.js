import React from 'react'

export default function PlayAgain({ again }) {
    return (
        <div className="menu-item">
            <button className="NextStep" onClick={() => again()} style={{
                visibility: again ? "visible" : "hidden"
            }}>Proovi uuesti</button>
        </div>
    )
}
