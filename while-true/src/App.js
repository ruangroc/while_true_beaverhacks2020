import React from 'react';
import { Button } from '@material-ui/core';

import FlashCard from './FlashCard';
import './App.css';

const App = () => {
  const [questionVals, setQuestionVals] = React.useState({});
  const [answerVals, setAnswerVals] = React.useState({});
  const nums = [0, 1, 2, 3, 4];

  const handleFieldChange = (fieldId, questionVal, answerVal) => {
    if (questionVal !== '') setQuestionVals({...questionVals, [fieldId]: questionVal});
    if (answerVal !== '') setAnswerVals({...answerVals, [fieldId]: answerVal});
  };

  const flashCards = nums.map(i => (
    <FlashCard
      key={i}
      id={i}
      onChange={handleFieldChange}
      qValues={questionVals[i]}
      aValues={answerVals[i]}
    />
  ));
  
  //Try typing in any field and see the change in real-time:
  console.log(questionVals);
  console.log(answerVals); 

  return (
    <div className="app-wrapper">
      <div className="app">
        <header className="app-header">
          Study Hub
        </header>
        { flashCards }
        <div className="button-wrapper">
          <Button id="create-deck-button" variant="contained" color="primary">
            Create Deck
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;