import React, { Component } from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import PasswordRecover from "../PasswordRecover";

export class AppRouter extends Component {
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/PasswordRecover" component={PasswordRecover} />
          <Redirect to="/Login" />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
