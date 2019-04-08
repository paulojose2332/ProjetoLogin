import React, { Component } from "react";

import Router from "./Router";

export class Dashboard extends Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Router history={history} />
      </div>
    );
  }
}

export default Dashboard;
