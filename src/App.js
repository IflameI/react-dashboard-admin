import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import classNames from 'classnames';

import {
  Header,
  Sidebar,
  BreadCrumbs,
  ContentMain,
  Typography,
  Table,
  Notifications,
  Login,
  useToken,
} from './components';

function App() {
  const [sidebarChanged, setSidebarChanged] = useState(false);
  const [sidebarHiden, setSidebarHiden] = useState(false);
  const { token, setToken, clearToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className='wrapper'>
      <main
        className={classNames('main', {
          sidebarChanged: sidebarChanged,
          sidebarHiden: sidebarHiden,
        })}>
        <Header
          sidebarHiden={sidebarHiden}
          setSidebarHiden={setSidebarHiden}
          sidebarChanged={sidebarChanged}
          setSidebarChanged={setSidebarChanged}
          clearToken={clearToken}
        />
        <Sidebar />
        <div className='main__content content__main'>
          <BreadCrumbs />
          <Switch>
            <Route exact path='/' component={ContentMain} />
            <Route exact path='/typography' component={Typography} />
            <Route exact path='/tables' component={Table} />
            <Route exact path='/notifications' component={Notifications} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
