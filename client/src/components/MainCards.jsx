import React from 'react';
import { MainCardsItem } from '.';

const MainCards = () => {
  const mainItem = [
    {
      id: 0,
      nameCard: 'Overall Growth',
      overallPercent: 76.38,
      montlyPercent: 10,
      dayPercent: 3,
      growForMonth: 9,
      progressBar: '33%',
    },
    {
      id: 1,
      nameCard: 'TRAFFIC VALUES',
      overallPercent: 66,
      montlyPercent: 7,
      dayPercent: 4,
      growForMonth: 2,
      progressBar: '53%',
    },
    {
      id: 2,
      nameCard: 'RANDOM VALUES',
      overallPercent: 99,
      montlyPercent: 51,
      dayPercent: 14,
      growForMonth: 4,
      progressBar: '73%',
    },
  ];
  return (
    <div className='content-main__card card-main'>
      <div className='card-main__row'>
        {mainItem.map((obj) => (
          <MainCardsItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default MainCards;
