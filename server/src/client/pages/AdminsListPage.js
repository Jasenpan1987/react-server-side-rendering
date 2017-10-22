import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAdmins } from "../actions";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdminsList() {
    return this.props.admins.map(admin => {
      return (
        <li key={admin.id}>{admin.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>This is strictly classified</h3>
        <ul>
          {this.renderAdminsList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admins: state.admins
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAdmins: () => dispatch(fetchAdmins())
  };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsListPage)
}