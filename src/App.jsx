import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "./containers/ErrorBoundary";
import Home from "./containers/Home";
import CityDetail from "./containers/CityDetail";
import NotFound from "./containers/NotFound";

import theme from "./theme";
import store from './createStore';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/city-detail/:city-id"
                component={CityDetail}
              />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
