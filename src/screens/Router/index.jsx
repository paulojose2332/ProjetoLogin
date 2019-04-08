import React, { Component } from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "../Login";
import Register from "../Register";
import PasswordRecover from "../PasswordRecover";
import Dashboard from "../Dashboard";

import { isLogged } from "../../helpers/auth";

export class AppRouter extends Component {
  render() {
    const { history, login } = this.props;

    const loggedIn = isLogged(login);

    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/Login"
            render={() => (loggedIn ? <Redirect to="/Dashboard" /> : <Login />)}
          />
          <Route
            exact
            path="/Register"
            render={() =>
              loggedIn ? <Redirect to="/Dashboard" /> : <Register />
            }
          />
          <Route
            exact
            path="/PasswordRecover"
            render={() =>
              loggedIn ? <Redirect to="/Dashboard" /> : <PasswordRecover />
            }
          />
          <Route
            exact
            path="/Dashboard"
            render={() =>
              loggedIn ? (
                <Dashboard history={history} />
              ) : (
                <Redirect to="/Login" />
              )
            }
          />
          <Redirect to="/Login" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  login
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
