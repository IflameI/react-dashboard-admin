import React from 'react';

const MessagesHeaderItem = () => {
  return (
    <div className='messages-dropmenu__item'>
      <div className='messages-card__wrapper'>
        <div className='messages-card__avavtar'>
          <img
            src='https://images.generated.photos/FAjRh6JH3iDAo-OPDzwHrhMl7tGvLILwVIPu9il6fng/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzRk/NDA3OGJjLWM1OGQt/NGM1OC1iZDU3LWVl/NTI1YmY2NTIwZi5q/cGc.jpg'
            alt='#'></img>
        </div>
        <div className='messages-card__info'>
          <div className='messages-card__name'>Chris Gray</div>
          <div className='messages-card__text'>Hey! What's up? So many times since we</div>
        </div>
      </div>
    </div>
  );
};

export default MessagesHeaderItem;
