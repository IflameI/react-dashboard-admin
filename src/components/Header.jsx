import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__row'>
        <div className='header__alert'>
          <div className='header__alert-content'>
            Check out Light Blue
            <button className='btn-setting'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z' />
              </svg>
            </button>
            on the right <button className='btn-close'>x</button>
          </div>
        </div>
        <div className='header__profile'>
          <div className='header__info'>
            <div className='header__photo'>
              <img src='https://thispersondoesnotexist.com/image' alt='#'></img>
            </div>
            <div className='header__name'>Philip Smith</div>
            <span className='header__drop-notifications'>9</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'>
              <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
            </svg>
            <div className='header__notifications notifications-header'>
              <div className='notifications-header__wrapper'>
                <div className='notifications-header__title'>You have 13 notifications</div>
                <div className='notifications-header__filter'>
                  <div className='notifications-header__category'>
                    <button className='notifications-header__decor notifications-header__decor_active'>
                      Notifications
                    </button>
                    <button className='notifications-header__decor notifications-header__decor_unic'>
                      Messages
                    </button>
                    <button className='notifications-header__decor'>Progress</button>
                  </div>
                </div>
                <div className='notifications-header__content'>
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
                </div>
                <div className='notifications-header__date'>
                  <span className='notifications-header__number'>Synced at: 21 Feb 2021 18:36</span>
                  <span className='notifications-header__refresh'>
                    <button>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'>
                        <path d='M5 18c4.667 4.667 12 1.833 12-4.042h-3l5-6 5 6h-3c-1.125 7.98-11.594 11.104-16 4.042zm14-11.984c-4.667-4.667-12-1.834-12 4.041h3l-5 6-5-6h3c1.125-7.979 11.594-11.104 16-4.041z' />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className='header__dropmenu-messages messages-dropmenu'>
              <div className='messages-dropmenu__wrapper'>
                <div className='messages-dropmenu__item'>
                  <div className='messages-card__wrapper'>
                    <div className='messages-card__avavtar'>
                      <img
                        src='https://images.generated.photos/FAjRh6JH3iDAo-OPDzwHrhMl7tGvLILwVIPu9il6fng/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzRk/NDA3OGJjLWM1OGQt/NGM1OC1iZDU3LWVl/NTI1YmY2NTIwZi5q/cGc.jpg'
                        alt='#'></img>
                    </div>
                    <div className='messages-card__info'>
                      <div className='messages-card__name'>Chris Gray</div>
                      <div className='messages-card__text'>
                        Hey! What's up? So many times since we
                      </div>
                    </div>
                  </div>
                </div>
                <div className='messages-dropmenu__item'>
                  <div className='messages-card__wrapper'>
                    <div className='messages-card__avavtar'>
                      <img
                        src='https://images.generated.photos/FAjRh6JH3iDAo-OPDzwHrhMl7tGvLILwVIPu9il6fng/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzRk/NDA3OGJjLWM1OGQt/NGM1OC1iZDU3LWVl/NTI1YmY2NTIwZi5q/cGc.jpg'
                        alt='#'></img>
                    </div>
                    <div className='messages-card__info'>
                      <div className='messages-card__name'>Chris Gray</div>
                      <div className='messages-card__text'>
                        Hey! What's up? So many times since we
                      </div>
                    </div>
                  </div>
                </div>
                <div className='messages-dropmenu__item'>
                  <div className='messages-card__wrapper'>
                    <div className='messages-card__avavtar'>
                      <img
                        src='https://images.generated.photos/FAjRh6JH3iDAo-OPDzwHrhMl7tGvLILwVIPu9il6fng/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzRk/NDA3OGJjLWM1OGQt/NGM1OC1iZDU3LWVl/NTI1YmY2NTIwZi5q/cGc.jpg'
                        alt='#'></img>
                    </div>
                    <div className='messages-card__info'>
                      <div className='messages-card__name'>Chris Gray</div>
                      <div className='messages-card__text'>
                        Hey! What's up? So many times since we
                      </div>
                    </div>
                  </div>
                </div>
                <div className='messages-dropmenu__button'>
                  <button>See all messages</button>
                </div>
              </div>
            </div>
            <div className='header__setings setings-header'>
              <div className='setings-header__wrapper'>
                <div className='setings-header__item'>
                  <div className='setings-header__title'>Sidebar on the</div>
                  <div className='setings-header__buttons'>
                    <button className='setings-header__btn-left setings-header__active'>
                      Left
                    </button>
                    <button className='setings-header__btn-right'>Right</button>
                  </div>
                </div>
                <div className='setings-header__item'>
                  <div className='setings-header__title'>Sidebar on the</div>
                  <div className='setings-header__buttons'>
                    <button className='setings-header__btn-left setings-header__active'>
                      Left
                    </button>
                    <button className='setings-header__btn-right'>Right</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='header__tickets-menu menu-tickets-header'>
              <div className='menu-tickets-header__wrapper'>
                <div className='menu-tickets-header__item'>
                  <div className='menu-tickets-header__text'>Check out this awesome ticket</div>
                </div>
                <div className='menu-tickets-header__item'>
                  <div className='menu-tickets-header__text'>Check out this awesome ticket</div>
                </div>
                <div className='menu-tickets-header__item'>
                  <div className='menu-tickets-header__text'>Check out this awesome ticket</div>
                </div>
                <div className='menu-tickets-header__item'>
                  <div className='menu-tickets-header__text'>Check out this awesome ticket</div>
                </div>
                <div className='menu-tickets-header__item'>
                  <div className='menu-tickets-header__text'>Check out this awesome ticket</div>
                </div>
                <div className='menu-tickets-header__button'>
                  <button>See all tickets</button>
                </div>
              </div>
            </div>
          </div>
          <div className='header__functionals'>
            <div className='header__messages'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z' />
              </svg>
            </div>
            <div className='header__settings'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z' />
              </svg>
            </div>
            <div className='header__tickets'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z' />
              </svg>
            </div>
            <div className='header__logout'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M14 12h-4v-12h4v12zm4.213-10.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
