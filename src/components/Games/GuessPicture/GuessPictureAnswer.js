import React from 'react';

const GuessPictureAnswer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
                onClick={() => props.checkAnswer(qAnswer)}
                key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));

    return (
        <>
            <ul disabled={!!props.clickedAnswer} className="Answers"></ul>
            <div>
                {props.correctAnswer ? 'Õige vastus!' : props.clickedAnswer ? 'Vale vastus!' : ''}
            </div>
        </>
    );
};

export default GuessPictureAnswer;
