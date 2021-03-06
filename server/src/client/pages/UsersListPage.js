import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchUsers } from "../actions";

class UserListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} User Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h5>Here is the list of users</h5>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

// this function is made for server side "componentDidMount"
function loadData(store) {
  // console.log(store.dispatch(fetchUsers())) // promise
  return store.dispatch(fetchUsers());
}

export { loadData };

export default {
  loadData: loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(UserListPage)
};
