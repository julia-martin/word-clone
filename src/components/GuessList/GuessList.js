import React from "react";

import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNum) => {
        const word = guesses[guessNum];
        return <Guess word={word} answer={answer} key={guessNum} />;
      })}
    </div>
  );
}

export default GuessList;
