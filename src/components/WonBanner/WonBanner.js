import React from "react";

import Banner from '../Banner';

function WonBanner({ numGuesses }) {
  return (
    <Banner status="happy">
       <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
