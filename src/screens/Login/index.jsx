import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import { Grid, Card, CardContent, TextField, Button } from "@material-ui/core";

export class Login extends Component {
  state = { email: "", password: "" };

  handleChange = (name, value) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    fetch("http://173.249.17.248:8078/Token", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        username: email,
        password
      })
    }).then(res => res.json())
    .then(json =>{
      console.log(json);
    });
  };

  render() {
    const { classes } = this.props;

    const { email, password } = this.state;

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
                      value={email}
                      onChange={e => this.handleChange("email", e.target.value)}
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

export default withStyles(styles, { withTheme: true })(Login);
