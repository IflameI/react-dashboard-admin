import React from 'react';
import { Route } from 'react-router';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => (
      <div className='content-main__breadcrumb-item breadcrumb-items_active'>Dashboard</div>
    ),
  },
  {
    path: '/typography',
    main: () => (
      <div className='content-main__breadcrumb-item breadcrumb-items_active'>Typography</div>
    ),
  },
  {
    path: '/tables',
    main: () => <div className='content-main__breadcrumb-item breadcrumb-items_active'>Tables</div>,
  },
  {
    path: '/notifications',
    main: () => (
      <div className='content-main__breadcrumb-item breadcrumb-items_active'>Notifications</div>
    ),
  },
];

const BreadCrumbs = () => {
  return (
    <nav className='content-main__breadcrumbs'>
      <ul className='content-main__breadcrumb'>
        <li className='content-main__breadcrumb-item'>YOU ARE HERE</li>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.main />
          </Route>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
