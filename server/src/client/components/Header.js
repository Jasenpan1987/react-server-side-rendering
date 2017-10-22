import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCurrentUser } from "../actions";

const Header = ({ auth }) => {
  console.log("my auth status is ", auth);

  const AuthBtn = auth ? (
    <li><a href="/api/logout">LogOut</a></li>
  ) : (
    <li><a href="/api/auth/google">Login</a></li>
  )

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          {AuthBtn}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
