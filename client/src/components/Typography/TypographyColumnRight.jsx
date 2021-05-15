import React from 'react';
import { ArrowDown, useFuncBlock } from '../../components';
import PropTypes from 'prop-types';

const TypographyColumnRight = () => {
  const { closedBlock, turnedBlock, toggleClosedBlock, toggleTurnedBlock } = useFuncBlock(false);
  return (
    <div style={{ display: closedBlock ? 'none' : '' }} className='typography__column'>
      <div className='typography__item'>
        <div className='typography__head header__global'>
          <h5 className='typography__title'>
            Body texts <small>Variations</small>
          </h5>
          <div className='typography__icons'>
            <button onClick={toggleTurnedBlock}>
              <ArrowDown />
            </button>
            <button onClick={toggleClosedBlock}>x</button>
          </div>
        </div>
        <div
          style={{ height: turnedBlock ? '0' : 'auto', overflow: turnedBlock ? 'hidden' : 'unset' }}
          className='typography__content'>
          <div className='typography__items-wrapper'>
            <div className='typography__subitem'>
              <h4 className='typography__subtitle'>Basic texts</h4>
              <p className='typography__text'>Styling for common texts</p>
              <div className='typography__info'>
                <p className='decor-paragraph'>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p className='decor-paragraph'>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p className='decor-paragraph'>
                  <ins>
                    This line of text is meant to be treated as an addition to the document.
                  </ins>
                </p>
                <p className='decor-paragraph'>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p className='decor-paragraph'>
                  <em>This line rendered as italicized text.</em>
                </p>
                <p className='decor-paragraph'>
                  <strong>This line rendered as bold text.</strong>
                </p>
              </div>
            </div>
            <div className='typography__subitem'>
              <h4 className='typography__subtitle'>Font weights</h4>
              <p className='typography__text'>Various font weights supported</p>
              <div className='typography__info'>
                <p className='p-weight'>Thin (default) font weight</p>
                <p className='p-weight p-normal'>Normal font weight</p>
                <p className='p-weight p-semi-bold'>Semi bold to empasize important thing</p>
                <p className='p-weight p-bold'>Bold font as a high priority</p>
              </div>
            </div>
            <div className='typography__subitem'>
              <h4 className='typography__subtitle'>Colors</h4>
              <p className='typography__text'>Bootstrap state colors can be applied to texts too</p>
              <div className='typography__info'>
                <p className='t-colors text-danger'>Some danger text</p>
                <p className='t-colors text-warning'>Some warning text</p>
                <p className='t-colors text-success'>Some succes text</p>
                <p className='t-colors text-primary'>Some primary text</p>
                <p className='t-colors text-info'>Some info text</p>
              </div>
            </div>
            <div className='typography__subitem'>
              <h4 className='typography__subtitle'>Blockquotes</h4>
              <p className='typography__text'>Citing someone is really easy</p>
              <div className='typography__info'>
                <blockquote className='blockquote'>
                  <p className='blockquote__paragraph'>
                    Don't get set into one form, adapt it and build your own, and let it grow, be
                    like water. Empty your mind, be formless, shapeless — like water. Now you put
                    water in a cup, it becomes the cup; You put water into a bottle it becomes the
                    bottle; You put it in a teapot it becomes the teapot. Now water can flow or it
                    can crash. Be water, my friend.
                  </p>
                  <div className='blockquote-footer'>
                    &mdash; Bruce Lee in
                    <cite title="A Warrior's Journey">A Warrior's Journey</cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
TypographyColumnRight.propTypes = {
  closedBlock: PropTypes.bool,
  turnedBlock: PropTypes.bool,
  toggleClosedBlock: PropTypes.func,
  toggleTurnedBlock: PropTypes.func,
};
export default TypographyColumnRight;
