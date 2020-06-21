import React from 'react';
import { Button } from '@material-ui/core';

import FlashCard from './FlashCard';
import './App.css';


function App() {
  const nums = [0, 1, 2, 3, 4];
  return (
    <div className="app-wrapper">
      <div className="app">
        <header className="app-header">
          Study Hub
        </header>
        {
          nums.map((i) => { return <div className="flash-card-wrapper"> <FlashCard id={i}/> </div> })
        }
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