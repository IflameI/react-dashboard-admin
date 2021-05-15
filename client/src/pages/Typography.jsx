import React from 'react';
import { TypographyColumnLeft, TypographyColumnRight } from '../components';

const Typography = () => {
  return (
    <>
      <h1 className='content-main__title'>
        Typography <small>Texts & Display</small>
      </h1>
      <section className='typography'>
        <div className='typography__row'>
          <TypographyColumnLeft />
          <TypographyColumnRight />
        </div>
      </section>
    </>
  );
};

export default Typography;
