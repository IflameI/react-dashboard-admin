import React, { useState } from 'react';
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
  const [refreshedBlock, setRefreshedBlock] = useState(false);
  const [closedBlock, setClosedBlock] = useState(false);
  const [tunedBlock, setTunedBlock] = useState(false);

  const toggleRefreshedBlock = () => {
    setRefreshedBlock(!refreshedBlock);
    let endpoint = false;
    if (!endpoint) {
      setTimeout(() => setRefreshedBlock(false), 2000);
    }
  };
  const toggleClosedBlock = () => {
    setClosedBlock(!closedBlock);
  };
  const toggleTurnedBlock = () => {
    setTunedBlock(!tunedBlock);
  };
  return (
    <div className='wrapper'>
      <main className='main'>
        <Header />
        <Sidebar />
        <div className='main__content content__main'>
          <BreadCrumbs />
          <Switch>
            <Route
              exact
              path='/'
              component={() => (
                <ContentMain
                  refreshedBlock={refreshedBlock}
                  toggleClosedBlock={toggleClosedBlock}
                  toggleTurnedBlock={toggleTurnedBlock}
                  toggleRefreshedBlock={toggleRefreshedBlock}
                  closedBlock={closedBlock}
                />
              )}
            />
            <Route
              exact
              path='/typography'
              component={() => <Typography toggleRefreshedBlock={toggleRefreshedBlock} />}
            />
            <Route exact path='/tables' component={Table} />
            <Route exact path='/notifications' component={Notifications} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
