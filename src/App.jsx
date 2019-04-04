import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppRouter from "./screens/Router";

import history from "./history";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppRouter history={history} />
      </MuiThemeProvider>
    );
  }
}

export default App;
