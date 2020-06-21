import React from 'react';
import { TextField } from '@material-ui/core';

function FlashCard({qValue, aValue, onChange, id}) {

    const handleQuestionChange = event => {
        const text = event.target.value;
        onChange(id, text, '');
    };

    const handleAnswerChange = event => {
        const text = event.target.value;
        onChange(id, '', text);
    };

    return (
        <>
            <div className="flash-card-header">Card #{id + 1}</div>
            <div className="flash-card" id={id}>
                <TextField id="question-input" label={`Enter question ${id + 1}`} variant="outlined" style={{gridArea: "left"}} value={qValue} onChange={handleQuestionChange}/>
                <TextField id="answer-input" label={`Enter answer ${id + 1}`} variant="outlined" style={{gridArea: "right"}} value={aValue} onChange={handleAnswerChange}/>
            </div>
        </>
    );
}

export default FlashCard;