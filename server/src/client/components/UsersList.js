import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  render() {
    return (
      <div>
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
  return store.dispatch(fetchUsers());
}

export { loadData };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
