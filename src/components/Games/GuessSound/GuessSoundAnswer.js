import React from 'react';

const MaismaaAnswer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer) => (
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
                <img src={props.answer[qAnswer]} alt="answer"/>
            </li>
        ));

    return (
        <>
            <div>
                {
                    props.correctAnswer ?
                        'Õige vastus!' :
                        props.clickedAnswer ? 'Vale vastus!' : ''
                }
            </div>
            <ul disabled={!!props.clickedAnswer} className="Answers">
                {answers}
            </ul>
        </>
    );
};

export default MaismaaAnswer;
