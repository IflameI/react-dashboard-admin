import React from 'react';
import { ArrowDown, ArrowUp, CogWheelIcon, PlusIcon } from '.';

const MainCards = () => {
  return (
    <div className='content-main__card card-main'>
      <div className='card-main__row'>
        <div className='card-main__column'>
          <div className='card-main__item'>
            <div className='card-main__header'>
              <div className='card-main__title'>USERBASE GROWTH </div>
              <div className='card-main__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <span>
                  <button>x</button>
                </span>
              </div>
            </div>
            <div className='card-main__body'>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Overall Growth</div>
                <div className='card-main__count'>76.38%</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Montly</div>
                <div className='card-main__count'>10.38%</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>24h</div>
                <div className='card-main__count'>3.38%</div>
              </div>
            </div>
            <div className='card-main__footer'>
              <div className='progress-bar progress-bar__card'>
                <span
                  className='progress-bar-fill progress-bar-green'
                  style={{ width: '50%' }}></span>
              </div>
              <div className='card-main__text'>
                <ArrowUp />
                <span className='span-space'>17% higher</span> that last month
              </div>
            </div>
          </div>
        </div>
        <div className='card-main__column'>
          <div className='card-main__item'>
            <div className='card-main__header'>
              <div className='card-main__title'>TRAFFIC VALUES</div>
              <div className='card-main__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <span>
                  <button>x</button>
                </span>
              </div>
            </div>
            <div className='card-main__body'>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Overall Values</div>
                <div className='card-main__count'>17 567 318</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Montly</div>
                <div className='card-main__count'>55 120</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>24h</div>
                <div className='card-main__count'>9 695</div>
              </div>
            </div>
            <div className='card-main__footer'>
              <div className='progress-bar progress-bar__card'>
                <span
                  className='progress-bar-fill progress-bar-red'
                  style={{ width: '50%' }}></span>
              </div>
              <div className='card-main__text'>
                <ArrowDown />
                <span className='span-space'>8% lower</span> that last month
              </div>
            </div>
          </div>
        </div>
        <div className='card-main__column'>
          <div className='card-main__item'>
            <div className='card-main__header'>
              <div className='card-main__title'>RANDOM VALUES</div>
              <div className='card-main__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <span>
                  <button>x</button>
                </span>
              </div>
            </div>
            <div className='card-main__body'>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Overcome T.</div>
                <div className='card-main__count'>104.85%</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>Take off Angle</div>
                <div className='card-main__count'>14.29°</div>
              </div>
              <div className='card-main__info'>
                <div className='card-main__subtitle'>World Pop.</div>
                <div className='card-main__count'>7,211M</div>
              </div>
            </div>
            <div className='card-main__footer'>
              <div className='progress-bar progress-bar__card'>
                <span
                  className='progress-bar-fill progress-bar-blue'
                  style={{ width: '50%' }}></span>
              </div>
              <div className='card-main__text'>
                <PlusIcon />
                <span className='span-space'>17% higher</span> that last month
              </div>
            </div>
          </div>
        </div>
        <div className='card-main__column'>
          <div className='card-main__item'>
            <div className='card-main__header'>
              <div className='card-main__title'>
                <span className='card-main__badge'>New</span> Messages
              </div>
              <div className='card-main__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <span>
                  <button>x</button>
                </span>
              </div>
            </div>
            <div className='card-main__body card-main__unic'>
              <div className='card-main__messages messages-card'>
                <div className='messages-card__wrapper'>
                  <div className='messages-card__avavtar'>
                    <img
                      src='https://images.generated.photos/EPP3xRZUzFNhXhIWOFKAjOkLBQl7vihXu0Wl3hmcG1U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzE1/NmY4MDEwLTA1OGMt/NGM2NS05Mzg0LWVj/NDYyODIzOGFjMC5q/cGc.jpg'
                      alt='#'></img>
                  </div>
                  <div className='messages-card__info'>
                    <div className='messages-card__name'>Chris Gray</div>
                    <div className='messages-card__text'>
                      Hey! What's up? So many times since we
                    </div>
                  </div>
                </div>
                <div className='messages-card__wrapper'>
                  <div className='messages-card__avavtar'>
                    <img
                      src='https://images.generated.photos/EPP3xRZUzFNhXhIWOFKAjOkLBQl7vihXu0Wl3hmcG1U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzE1/NmY4MDEwLTA1OGMt/NGM2NS05Mzg0LWVj/NDYyODIzOGFjMC5q/cGc.jpg'
                      alt='#'></img>
                  </div>
                  <div className='messages-card__info'>
                    <div className='messages-card__name'>Chris Gray</div>
                    <div className='messages-card__text'>
                      Hey! What's up? So many times since we
                    </div>
                  </div>
                </div>
                <div className='messages-card__wrapper'>
                  <div className='messages-card__avavtar'>
                    <img
                      src='https://images.generated.photos/EPP3xRZUzFNhXhIWOFKAjOkLBQl7vihXu0Wl3hmcG1U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzE1/NmY4MDEwLTA1OGMt/NGM2NS05Mzg0LWVj/NDYyODIzOGFjMC5q/cGc.jpg'
                      alt='#'></img>
                  </div>
                  <div className='messages-card__info'>
                    <div className='messages-card__name'>Chris Gray</div>
                    <div className='messages-card__text'>
                      Hey! What's up? So many times since we
                    </div>
                  </div>
                </div>
                <div className='messages-card__wrapper'>
                  <div className='messages-card__avavtar'>
                    <img
                      src='https://images.generated.photos/EPP3xRZUzFNhXhIWOFKAjOkLBQl7vihXu0Wl3hmcG1U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzE1/NmY4MDEwLTA1OGMt/NGM2NS05Mzg0LWVj/NDYyODIzOGFjMC5q/cGc.jpg'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
