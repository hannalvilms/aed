import React from 'react';

const MaismaaAnswer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
                className=
                    {
                        props.correctAnswer === qAnswer ?
                            'correct' :
                            props.clickedAnswer === qAnswer ?
                                'incorrect' : ''
                    }
                onClick={() => props.checkAnswer(qAnswer)}
                key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));

    return (
        <>
            <ul disabled={!!props.clickedAnswer} className="Answers">
                {answers}
            </ul>
            <div>
                {
                    props.correctAnswer ?
                        'Õige vastus!' :
                        props.clickedAnswer ? 'Vale vastus!' : ''
                }
            </div>
        </>
    );
};

export default MaismaaAnswer;