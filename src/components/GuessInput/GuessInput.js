import React, { useState } from "react";

function GuessInput({ addToGuessList, gameOver }) {
  const [ tentativeGuess, setTentativeGuess ] = useState('');

  const updateGuess = (e) => {
    setTentativeGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      return;
    }

    console.log(tentativeGuess);
    addToGuessList(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={tentativeGuess} onChange={updateGuess} required pattern="[a-zA-Z]{5}" maxLength="5" title="5-letter word" disabled={gameOver} />
    </form>
  );
}

export default GuessInput;
