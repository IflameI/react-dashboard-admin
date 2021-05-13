import React from 'react';
import { ArrowDown, useFuncBlock } from '../../components';

const TypographyColumnLeft = () => {
  const { closedBlock, turnedBlock, toggleClosedBlock, toggleTurnedBlock } = useFuncBlock(false);

  return (
    <div style={{ display: closedBlock ? 'none' : '' }} className='typography__column'>
      <div className='typography__item'>
        <div className='typography__head header__global '>
          <h5 className='typography__title'>
            Headings <small>Default and customized</small>
          </h5>
          <div className='typography__icons'>
            <button onClick={toggleTurnedBlock}>
              <ArrowDown />
            </button>
            <button onClick={toggleClosedBlock}>x</button>
          </div>
        </div>
        <div
          style={{
            height: turnedBlock ? '0' : 'auto',
            overflow: turnedBlock ? 'hidden' : 'unset',
          }}
          className='typography__content'>
          <div className='typography__subitem'>
            <h4 className='typography__subtitle'>Default headings</h4>
            <p className='typography__text'>Basic headings for everyday use</p>
            <div className='typography__info'>
              <div className='typography__subrow'>
                <div className='typography__subcolumn'>
                  <h1>h1. Heading</h1>
                  <h2>h2. Heading</h2>
                  <h3>h3. Heading</h3>
                  <h4>h4. Heading</h4>
                  <h5>h5. Heading</h5>
                  <h6>h6. Heading</h6>
                </div>
                <div className='typography__subcolumn'>
                  <h1 className='text-danger'>h1. Heading</h1>
                  <h2 className='text-warning'>h2. Heading</h2>
                  <h3 className='text-lime'>h3. Heading</h3>
                  <h4 className='text-success'>h4. Heading</h4>
                  <h5 className='text-primary'>h5. Heading</h5>
                  <h6 className='text-info'>h6. Heading</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='typography__subitem'>
            <h4 className='typography__subtitle'>Customized headings</h4>
            <p className='typography__text'>Enhanced with additional text</p>
            <h3 className='typography__info'>
              Headings <small>And some clarification text</small>
            </h3>
          </div>
          <div className='typography__subitem'>
            <h4 className='typography__subtitle'>Display</h4>
            <p className='typography__text'>Headings to stand out</p>
            <div className='typography__info'>
              <h1 className='display display-1'>Display 1</h1>
              <h1 className='display display-2'>Display 1</h1>
              <h1 className='display display-3'>Display 3</h1>
              <h1 className='display display-4'>Display 4</h1>
            </div>
          </div>
          <div className='typography__subitem'>
            <h4 className='typography__subtitle'>Lead</h4>
            <p className='typography__text'>
              Make a paragraph stand out by adding
              <code className='highlighter-rouge'>.lead</code>.
            </p>
            <div className='typography__info'>
              <p className='lead'>React-admin dashboard built on clear css</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyColumnLeft;
