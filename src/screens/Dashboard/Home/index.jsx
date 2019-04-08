import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/login";

export class Home extends Component {
  render() {
    return (
      <div>
        <a onClick={this.props.logoutUser}>Logout</a>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
