import React, { Component } from "react";
import petzlogo from "./petzlogo.png";
import { Link } from "react-router-dom";
import "./App.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-3">
            <a href="/" className="brand-logo">
              <img src={petzlogo} alt="logo" className="logo" />
            </a>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/pets">Pets</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/new">New</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/search">Search</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/about">About</Link>
                </li>
              )}
              {this.props.isLoggedIn === false && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {this.props.isLoggedIn === false && (
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/logout" onClick={this.props.handleLogOut}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav blue lighten-3">
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/" className="sidenav-close white-text text-darken-2">
                Home
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link
                to="/pets"
                className="sidenav-close white-text text-darken-2"
              >
                Pets
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link
                to="/new"
                className="sidenav-close white-text text-darken-2"
              >
                New
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link
                to="/search"
                className="sidenav-close white-text text-darken-2"
              >
                Search
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link
                to="/about"
                className="sidenav-close white-text text-darken-2"
              >
                About
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === false && (
            <li>
              <Link
                to="/login"
                className="sidenav-close white-text text-darken-2"
              >
                Login
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === false && (
            <li>
              <Link
                to="/signup"
                className="sidenav-close white-text text-darken-2"
              >
                Sign Up
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link
                to="/logout"
                onClick={this.props.handleLogOut}
                className="sidenav-close white-text text-darken-2"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Nav;
