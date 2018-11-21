import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = props => {
  console.log(props);
  return (
    <div>
      <div className="jumbotron logobar" style={{ marginBottom: "0rem" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <div className="text-center">
                <h3>
                  <b>Make Me Builder</b>
                </h3>
              </div>
            </div>
            <div className="col-sm">
              <div className="">
                {props.user ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Profile
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/user">
                        View Profile
                      </Link>
                      {props.user.isSupplier && (
                        <Link className="dropdown-item" to="/supplier">
                          Supplier
                        </Link>
                      )}
                      {props.user.isAdmin && (
                        <Link className="dropdown-item" to="/admin">
                          Admin
                        </Link>
                      )}

                      <button
                        className="dropdown-item"
                        onClick={props.logoutHandler}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <Modal
                    signUpHandler={props.signup}
                    signInHandler={props.signIn}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
        data-toggle="affix"
      >
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarsExample11"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/gallery"
                  activeClassName="active"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  exact={true}
                  to="/about"
                  activeClassName="active"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  exact={true}
                  to="/contact"
                  activeClassName="active"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  exact={true}
                  to="/blog"
                  activeClassName="active"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
