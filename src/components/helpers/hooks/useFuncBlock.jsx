import { useState } from 'react';

const useFuncBlock = (initial) => {
  const [refreshedBlock, setRefreshedBlock] = useState(initial);
  const [closedBlock, setClosedBlock] = useState(initial);
  const [turnedBlock, setTurnedBlock] = useState(initial);

  const toggleRefreshedBlock = () => {
    setRefreshedBlock(!refreshedBlock);
    let endpoint = false;
    if (!endpoint) {
      setTimeout(() => setRefreshedBlock(false), 2000);
    }
  };

  const toggleClosedBlock = () => {
    setClosedBlock(!closedBlock);
  };

  const toggleTurnedBlock = () => {
    setTurnedBlock(!turnedBlock);
  };

  return {
    refreshedBlock,
    closedBlock,
    turnedBlock,
    toggleRefreshedBlock,
    toggleClosedBlock,
    toggleTurnedBlock,
  };
};

export default useFuncBlock;
