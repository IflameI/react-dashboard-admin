import React from 'react';
import { ArrowUp, CogWheelIcon, useFuncBlock } from '.';

const MainCardsItem = ({
  nameCard,
  overallPercent,
  montlyPercent,
  dayPercent,
  progressBar,
  growForMonth,
}) => {
  const { closedBlock, toggleClosedBlock } = useFuncBlock(false);
  return (
    <div className='card-main__column'>
      <div style={{ display: closedBlock ? 'none' : '' }} className='card-main__item'>
        <div className='card-main__header'>
          <div className='card-main__title'>{nameCard} </div>
          <div className='card-main__icons'>
            <button>
              <CogWheelIcon />
            </button>
            <span>
              <button onClick={toggleClosedBlock}>x</button>
            </span>
          </div>
        </div>
        <div className='card-main__body'>
          <div className='card-main__info'>
            <div className='card-main__subtitle'>Overall Growth</div>
            <div className='card-main__count'>{overallPercent}%</div>
          </div>
          <div className='card-main__info'>
            <div className='card-main__subtitle'>Montly</div>
            <div className='card-main__count'>{montlyPercent}%</div>
          </div>
          <div className='card-main__info'>
            <div className='card-main__subtitle'>24h</div>
            <div className='card-main__count'>{dayPercent}%</div>
          </div>
        </div>
        <div className='card-main__footer'>
          <div className='progress-bar progress-bar__card'>
            <span
              className='progress-bar-fill progress-bar-green'
              style={{ width: progressBar }}></span>
          </div>
          <div className='card-main__text'>
            <ArrowUp />
            <span className='span-space'>{growForMonth}% higher</span> that last month
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCardsItem;
