import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const NavSite = ({ open }) => {
  return (
    <ul
      className={classNames('sidebar__top', {
        open: open,
      })}>
      <li className='sidebar__link'>
        <NavLink exact to='/' activeClassName='sidebar__icon_active'>
          <span className='sidebar__icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='rgba(244,244,245,.9)'>
              <path d='M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z' />
            </svg>
          </span>
          Dashboard
        </NavLink>
      </li>
      <h5 className='sidebar__title'>TEMPLATE</h5>
      <li className='sidebar__link'>
        <NavLink to='/typography' activeClassName='sidebar__icon_active'>
          <span className='sidebar__icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='rgba(244,244,245,.9)'>
              <path d='M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z' />
            </svg>
          </span>
          <span className='sidebar__name'>Typograpghy</span>
        </NavLink>
      </li>
      <li className='sidebar__link'>
        <NavLink to='/tables' activeClassName='sidebar__icon_active'>
          <span className='sidebar__icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='rgba(244,244,245,.9)'>
              <path d='M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-.569 6.134v4.96l-4.25-2.421v-5.134l4.25 2.595zm-5.83 14.842l-4.421-2.539v-5.176l4.421 2.595v5.12zm-3.773-8.702l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm10.586 5.115l-4.722-2.757v-5.116l4.722 2.754v5.119zm-4.074-8.861l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z' />
            </svg>
          </span>
          <span className='sidebar__name'>Tables Basic</span>
        </NavLink>
      </li>
      <li className='sidebar__link'>
        <NavLink to='/notifications' activeClassName='sidebar__icon_active'>
          <span className='sidebar__icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='rgba(244,244,245,.9)'>
              <path d='M13 16h-2v-6h2v6zm-1-10.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm0-2.75c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z' />
            </svg>
          </span>
          <span className='sidebar__name'>Notifications</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavSite;
