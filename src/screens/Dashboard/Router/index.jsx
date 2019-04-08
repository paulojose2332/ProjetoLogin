import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "../Home";

const router = props => {
  const { history } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/Dashboard" component={Home} />
        <Redirect exact to="/Dashboard" />
      </Switch>
    </Router>
  );
};

export default router;