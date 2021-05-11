import React, { useState } from 'react';
import { CogWheelIcon, MainCards, MapChart, MarkIcon, RefreshIcon, RefreshLoader } from '.';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

const ContentMain = ({
  refreshedBlock,
  toggleTurnedBlock,
  toggleClosedBlock,
  toggleRefreshedBlock,
  closedBlock,
}) => {
  const [mapContent, setMapContent] = useState('');
  return (
    <>
      <h1 className='content-main__title'>
        Dashboard <small>The Lucky One</small>
      </h1>
      <div className='content-main__row'>
        <div className='content-main__column content-main__big-column'>
          <div className='content-main__map'>
            <MapChart setTooltipContent={setMapContent} />
            <ReactTooltip backgroundColor='#fff' textColor='#000'>
              {mapContent}
            </ReactTooltip>
          </div>
        </div>
        <div className='content-main__column'>
          <div
            className={classNames('content-main stats-main', {
              closedBlock: closedBlock,
            })}>
            <div className='stats-main__title-wrapper'>
              <h3 className='stats-main__title'>
                Map <span>Statistics</span>
              </h3>
              <div className='stats-main__controll'>
                <ul>
                  <li>
                    <button>
                      <CogWheelIcon />
                    </button>
                  </li>
                  <li>
                    <button onClick={toggleRefreshedBlock}>
                      <RefreshIcon />
                    </button>
                  </li>
                  <li>
                    <button onClick={toggleClosedBlock}>
                      <span className='stats-main__close'>x</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {refreshedBlock ? (
              <RefreshLoader />
            ) : (
              <div className='stats-main__content-wrapper'>
                <div className='stats-main__status'>
                  Status: <span>Live</span>
                </div>
                <div className='stats-main__countries'>
                  <span>
                    <MarkIcon />
                  </span>
                  146 Countries, 2759 Cities
                </div>
                <div className='stats-main__bars'>
                  <div className='stats-main__bar'>
                    <div className='stats-main__row'>
                      <div className='stats-main__column'>
                        <div className='stats-main__visits title-bar'>Foreign Visits</div>
                        <p>Some Cool Text</p>
                        <div className='progress-bar'>
                          <span className='progress-bar-fill' style={{ width: '75%' }}></span>
                        </div>
                      </div>
                      <div className='stats-main__column'>
                        <span className='stats-main__count'>75%</span>
                      </div>
                    </div>
                  </div>
                  <div className='stats-main__bar'>
                    <div className='stats-main__row'>
                      <div className='stats-main__column'>
                        <div className='stats-main__visits title-bar'>Local Visits</div>
                        <p>P. to C. Conversion</p>
                        <div className='progress-bar'>
                          <span
                            className='progress-bar-fill progress-bar-red'
                            style={{ width: '84%' }}></span>
                        </div>
                      </div>
                      <div className='stats-main__column'>
                        <span className='stats-main__count'>84%</span>
                      </div>
                    </div>
                  </div>
                  <div className='stats-main__bar'>
                    <div className='stats-main__row'>
                      <div className='stats-main__column'>
                        <div className='stats-main__visits title-bar'>Sound Frequencies</div>
                        <p>Average Bitrate</p>
                        <div className='progress-bar'>
                          <span
                            className='progress-bar-fill progress-bar-green'
                            style={{ width: '92%' }}></span>
                        </div>
                      </div>
                      <div className='stats-main__column'>
                        <span className='stats-main__count'>92%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='stats-main__distributions'>Map Distributions</div>
                <div className='stats-main__tracking'>
                  Tracking: <span>Active</span>
                </div>
                <div className='stats-main__elements'>
                  <CogWheelIcon />
                  391 elements installed, 84 sets
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <MainCards />
    </>
  );
};

export default ContentMain;
