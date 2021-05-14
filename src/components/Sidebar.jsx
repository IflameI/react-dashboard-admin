import React from 'react';
import { NavSite } from '.';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__logo'>REACT-DASHBOARD</div>
      <div className='sidebar__nav'>
        <NavSite />
        <h5 className='sidebar__title'>LABELS</h5>
        <ul className='sidebar__middle'>
          <li className='sidebar__link'>
            <span className='sidebar__dec sidebar__dec-green'>My Recent</span>
          </li>
          <li className='sidebar__link'>
            <span className='sidebar__dec sidebar__dec-blue'>Starred</span>
          </li>
          <li className='sidebar__link'>
            <span className='sidebar__dec sidebar__dec-red'>Background</span>
          </li>
        </ul>
        <h5 className='sidebar__title'>PROJECTS</h5>
        <div className='sidebar__bars bars-sidebar'>
          <div className='bars-sidebar__item'>
            <div className='bars-sidebar__head'>
              <div className='bars-sidebar__title'>Sales Report</div>
            </div>
            <div className='progress-bar'>
              <span className='progress-bar-fill' style={{ width: '65%' }}></span>
            </div>
            <div className='bars-sidebar__text'>Calculating x-axis bias... 65%</div>
          </div>
          <div className='bars-sidebar__item'>
            <div className='bars-sidebar__head'>
              <div className='bars-sidebar__title'>Personal Responsibility</div>
            </div>
            <div className='progress-bar'>
              <span className='progress-bar-fill progress-bar-red' style={{ width: '25%' }}></span>
            </div>
            <div className='bars-sidebar__text'>Provide required notes</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
