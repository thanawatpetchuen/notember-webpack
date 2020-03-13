import React from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Home from '../pages/home';

export default () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
