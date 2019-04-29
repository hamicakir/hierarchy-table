import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorBoundary from './containers/ErrorBoundary';
import Home from './containers/Home';
import NotFound from './containers/404';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
