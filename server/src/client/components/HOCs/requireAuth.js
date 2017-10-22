import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default function requireAuth(BaseComponent) {
  class RequireAuthComponent extends Component {
    render() {
      switch(this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div>Retrieve User's Status...</div>
        default:
          return <BaseComponent {...this.props} />
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(RequireAuthComponent);
}