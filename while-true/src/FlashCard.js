import React from 'react';
import { TextField } from '@material-ui/core';

function FlashCard(id) {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
        console.log(`event.target.value: ${event.target.value}`);
        console.log(`question: ${question}`);
    };
    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
        console.log(`event.target.value:" ${event.target.value}`);
        console.log(`answer: ${answer}`);
    };

    return (
        <>
            <div className="flash-card-header">Card #{id.id + 1}</div>
            <div className="flash-card" id={id.id}>
                <TextField id="question-input" label={`Enter question ${id.id + 1}`} variant="outlined" style={{gridArea: "left"}} value={question} onChange={handleQuestionChange}/>
                <TextField id="answer-input" label={`Enter answer ${id.id + 1}`} variant="outlined" style={{gridArea: "right"}} value={answer} onChange={handleAnswerChange}/>
            </div>
        </>
    );
}

export default FlashCard;