import React from "react";

import Cell from '../Cell';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ word, answer }) {
  const guessResult = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((letterIdx) => (
        <Cell
          letter={word ? word[letterIdx] : undefined}
          status={guessResult ? guessResult[letterIdx].status : undefined}
          key={letterIdx}
        />
      ))}
    </p>
  );
}

export default Guess;
