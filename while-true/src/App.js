import React from 'react';
import './App.css';
import { TextField, Button } from '@material-ui/core';

function App() {
  return (
      <div className="App">
        <header className="">
          Enter Your Text Below:
        </header>
        <TextField id="question-input" label="Question" variant="outlined" />
        <TextField id="answer-input" label="Answer" variant="outlined" />
        <Button id="create-deck" variant="contained" color="primary">
          Create Deck
        </Button>
      </div>
  );
}

export default App;