import React, { useState } from 'react';
import {
  CogWheelIcon,
  MainCards,
  MapChart,
  RefreshIcon,
  RefreshLoader,
  StatsMainBlock,
  useFuncBlock,
} from '.';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

const ContentMain = () => {
  const [mapContent, setMapContent] = useState('');

  const { refreshedBlock, closedBlock, toggleRefreshedBlock, toggleClosedBlock } =
    useFuncBlock(false);

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
            {refreshedBlock ? <RefreshLoader /> : <StatsMainBlock />}
          </div>
        </div>
      </div>
      <MainCards />
    </>
  );
};

export default ContentMain;
