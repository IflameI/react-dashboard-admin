import React from 'react';

const RefreshLoader = () => {
  return (
    <div className='refresh-loader__wrapper'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RefreshLoader;
