import React from 'react';
import { TextField } from '@material-ui/core';

function FlashCard(id) {
    return (
        <>
            <div className="flash-card-header">Card #{id.id + 1}</div>
            <div className="flash-card" id={id.id}>
                <TextField id="question-input" label={`Enter question ${id.id + 1}`} variant="outlined" style={{gridArea: "left"}}/>
                <TextField id="answer-input" label={`Enter answer ${id.id + 1}`} variant="outlined" style={{gridArea: "right"}}/>
            </div>
        </>
    );
}

export default FlashCard;