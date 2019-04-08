import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./styles";
import { Grid, Card, CardContent, TextField, Button } from "@material-ui/core";

import * as actions from "../../store/actions/register";

const genders = [
  { value: 0, label: "Masculino" },
  { value: 1, label: "Feminino" }
];

const states = [
  { label: "Acre", value: "AC" },
  { label: "Alagoas", value: "AL" },
  { label: "Amap\u00e1", value: "AP" },
  { label: "Amazonas", value: "AM" },
  { label: "Bahia", value: "BA" },
  { label: "Cear\u00e1", value: "CE" },
  { label: "Distrito Federal", value: "DF" },
  { label: "Esp\u00edrito Santo", value: "ES" },
  { label: "Goi\u00e1s", value: "GO" },
  { label: "Maranh\u00e3o", value: "MA" },
  { label: "Mato Grosso", value: "MT" },
  { label: "Mato Grosso do Sul", value: "MS" },
  { label: "Minas Gerais", value: "MG" },
  { label: "Paran\u00e1", value: "PR" },
  { label: "Para\u00edba", value: "PB" },
  { label: "Par\u00e1", value: "PA" },
  { label: "Pernambuco", value: "PE" },
  { label: "Piau\u00ed", value: "PI" },
  { label: "Rio Grande do Norte", value: "RN" },
  { label: "Rio Grande do Sul", value: "RS" },
  { label: "Rio de Janeiro", value: "RJ" },
  { label: "Rond\u00f4nia", value: "RO" },
  { label: "Roraima", value: "RR" },
  { label: "Santa Catarina", value: "SC" },
  { label: "Sergipe", value: "SE" },
  { label: "S\u00e3o Paulo", value: "SP" },
  { label: "Tocantins", value: "TO" }
];

export class Register extends Component {
  handleChange = (name, value) => this.props.setValue({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.submitRegister();
  };

  render() {
    const { classes, state } = this.props;

    const {
      name,
      lastName,
      email,
      password,
      confirmPassword,
      state: sTate,
      city,
      gender,
      birthdate
    } = state;

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
                      label="Nome"
                      type="text"
                      fullWidth
                      required
                      value={name}
                      onChange={e => this.handleChange("name", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Sobrenome"
                      type="text"
                      fullWidth
                      required
                      value={lastName}
                      onChange={e =>
                        this.handleChange("lastName", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-select-gender"
                      select
                      label="Genero"
                      className={classes.textField}
                      fullWidth
                      required
                      value={gender}
                      onChange={e =>
                        this.handleChange("gender", e.target.value)
                      }
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                    >
                      {genders.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="e-mail"
                      fullWidth
                      required
                      value={email}
                      onChange={e => this.handleChange("email", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Data de nascimento"
                      type="date"
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                      value={birthdate}
                      onChange={e => this.handleChange("birthdate", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-select-gender"
                      select
                      label="Estado"
                      className={classes.textField}
                      fullWidth
                      required
                      value={sTate}
                      onChange={e => this.handleChange("state", e.target.value)}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                    >
                      {states.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Cidade"
                      type="text"
                      fullWidth
                      required
                      value={city}
                      onChange={e => this.handleChange("city", e.target.value)}
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
                    <TextField
                      label="Confirmar senha"
                      type="password"
                      fullWidth
                      required
                      value={confirmPassword}
                      onChange={e =>
                        this.handleChange("confirmPassword", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit">Registrar</Button>
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
  state: state.register
});

const mapDispatchToProps = {
  ...actions
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
