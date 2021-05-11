import React from 'react';

const RefreshLoader = () => {
  return (
    <div className='refresh-loader__wrapper'>
      <div class='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RefreshLoader;
