import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ErrorBoundary from "./containers/ErrorBoundary";
import Home from "./containers/Home";
import CityDetail from './containers/CityDetail';
import NotFound from "./containers/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city-detail/:city-id" component={CityDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
