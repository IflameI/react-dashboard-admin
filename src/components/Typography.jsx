import React from 'react';
import { ArrowDown } from '.';

const Typography = () => {
  return (
    <>
      <h1 className='content-main__title'>
        Typography <small>Texts & Display</small>
      </h1>
      <section className='typography'>
        <div className='typography__row'>
          <div className='typography__column'>
            <div className='typography__item'>
              <div className='typography__head header__global '>
                <h5 className='typography__title'>
                  Headings <small>Default and customized</small>
                </h5>
                <div className='typography__icons'>
                  <button>
                    <ArrowDown />
                  </button>
                  <button>x</button>
                </div>
              </div>
              <div className='typography__content'>
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
          <div className='typography__column'>
            <div className='typography__item'>
              <div className='typography__head header__global'>
                <h5 className='typography__title'>
                  Body texts <small>Variations</small>
                </h5>
                <div className='typography__icons'>
                  <button>
                    <ArrowDown />
                  </button>
                  <button>x</button>
                </div>
              </div>
              <div className='typography__content'>
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
                  <p className='typography__text'>
                    Bootstrap state colors can be applied to texts too
                  </p>
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
                        Don't get set into one form, adapt it and build your own, and let it grow,
                        be like water. Empty your mind, be formless, shapeless — like water. Now you
                        put water in a cup, it becomes the cup; You put water into a bottle it
                        becomes the bottle; You put it in a teapot it becomes the teapot. Now water
                        can flow or it can crash. Be water, my friend.
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
      </section>
    </>
  );
};

export default Typography;
