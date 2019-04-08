import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import styles from "./styles";
import { Grid, Card, CardContent, TextField, Button } from "@material-ui/core";

import * as actions from "../../store/actions/login";

export class Login extends Component {

  handleChange = (name, value) => this.props.setValue({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.submitLogin();
  };

  render() {
    const { classes, state } = this.props;

    const { username, password } = state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.container}
          container
          justify="center"
          alignItems="center"
        >
          <Card>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <TextField
                      label="E-mail"
                      type="email"
                      fullWidth
                      required
                      value={username}
                      onChange={e => this.handleChange("username", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Senha"
                      type="password"
                      fullWidth
                      required
                      value={password}
                      onChange={e =>
                        this.handleChange("password", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit">Login</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.login
});

const mapDispatchToProps = {
  ...actions
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
