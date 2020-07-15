import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

import { withRouter } from "react-router-dom";

import logoBlack from "../images/Logo-negro.png";
import logoWhite from "../images/Logo-blanco.png";

class Menu extends Component {
  render() {
    const route = this.props.location.pathname;
    return (
      <nav className={route === "/" ? "home_menu" : "menu"}>
        <Link to="/">
          <img
            className="logo"
            src={route === "/" ? logoWhite : logoBlack}
            alt="Logo"
          />
        </Link>
        {route === "/perfil" ? (
          ""
        ) : (
          <Link
            className={route === "/" ? "link_profile" : "link_profile_black"}
            to="/perfil"
          >
            Sobre mi
          </Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Menu);
