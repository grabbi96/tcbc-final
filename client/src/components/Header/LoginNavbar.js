import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";
class LoginNavbar extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }
  logoutHandler = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem className="active">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <a
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={this.logoutHandler}
          >
            Logout
          </a>
        </NavItem>
      </Nav>
    );
  }
}

export default connect(
  null,
  { logout }
)(withRouter(LoginNavbar));
