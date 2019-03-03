import React, { Component } from "react";

import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
class LogoutNavbar extends Component {
  state = {};
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default LogoutNavbar;
