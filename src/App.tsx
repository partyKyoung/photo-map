import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import UploadPhoto from '@/pages/UploadPhoto';

const App: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={UploadPhoto} exact path="/photo/upload" />
    </Switch>
  );
};
export default App;
