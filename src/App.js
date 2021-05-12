import React from 'react';
import { Route, Switch } from 'react-router';

import {
  Header,
  Sidebar,
  BreadCrumbs,
  ContentMain,
  Typography,
  Table,
  Notifications,
} from './components';

function App() {
  return (
    <div className='wrapper'>
      <main className='main'>
        <Header />
        <Sidebar />
        <div className='main__content content__main'>
          <BreadCrumbs />
          <Switch>
            <Route exact path='/' component={() => <ContentMain />} />
            <Route exact path='/typography' component={() => <Typography />} />
            <Route exact path='/tables' component={Table} />
            <Route exact path='/notifications' component={Notifications} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
