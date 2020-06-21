import React from 'react';
import { TextField, Card, CardContent } from '@material-ui/core';

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
            <Card className="card" style={{marginBottom: 12, backgroundColor: "whitesmoke"}}>
                <CardContent>
                    <div className="flash-card-header">Card #{id + 1}</div>
                    <div className="flash-card" id={id}>
                        <TextField id="question-input" label={`Enter question ${id + 1}`} variant="outlined" style={{gridArea: "left", width: 300}} value={qValue} onChange={handleQuestionChange}/>
                        <TextField id="answer-input" label={`Enter answer ${id + 1}`} variant="outlined" style={{gridArea: "right", width: 300}} value={aValue} onChange={handleAnswerChange}/>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default FlashCard;