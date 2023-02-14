import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [guesses, setGuesses] = useState([]);

  const addToGuessList = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      {gameStatus === 'won' && <WonBanner numGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput addToGuessList={addToGuessList} gameOver={gameStatus !== 'running'} />
    </>
  );
}

export default Game;
