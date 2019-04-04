import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import storeCreator from "./store";

import AppRouter from "./screens/Router";

import history from "./history";

const { store, persistor } = storeCreator();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter history={history} />
          </PersistGate>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
