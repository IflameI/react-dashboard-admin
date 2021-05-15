import React from 'react';

const NotificationsHeaderItem = () => {
  return (
    <div className='notifications-header__item'>
      <div className='notifications-header__image'>
        <img
          src='https://images.generated.photos/FAjRh6JH3iDAo-OPDzwHrhMl7tGvLILwVIPu9il6fng/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzRk/NDA3OGJjLWM1OGQt/NGM1OC1iZDU3LWVl/NTI1YmY2NTIwZi5q/cGc.jpg'
          alt=''></img>
      </div>
      <div className='notifications-header__info'>
        <div className='notifications-header__text'>
          1 new user just signed up! Check out Monica Smith's account
        </div>
        <div className='notifications-header__time'>2 mins ago</div>
      </div>
    </div>
  );
};

export default NotificationsHeaderItem;
