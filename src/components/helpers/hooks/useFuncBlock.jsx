import React, { useState } from 'react';

const useFuncBlock = (initial) => {
  const [refreshedBlock, setRefreshedBlock] = useState(initial);
  const [closedBlock, setClosedBlock] = useState(initial);

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

  return { refreshedBlock, closedBlock, toggleRefreshedBlock, toggleClosedBlock };
};

export default useFuncBlock;
