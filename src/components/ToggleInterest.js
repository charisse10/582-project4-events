import React, { useState } from 'react';

function ToggleInterest() {
  const [isInterested, setIsInterested] = useState(false);

  const toggleInterest = () => {
    setIsInterested(!isInterested);
  };

  return (
    <button
      onClick={toggleInterest}
      className={isInterested ? 'interested-button' : ''}
    >
      {isInterested ? 'Interested!' : 'Interested'}
    </button>
  );
}

export default ToggleInterest;
