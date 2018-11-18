import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
const Header = props => (
  <div>
    <div className="jumbotron logobar" style={{ marginBottom: "0rem" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="text-left">
              <div className="topbar-social">
                <a
                  href="/"
                  className="pad topbar-social-item fab fa-facebook fa-2x"
                />
                {/* <i className="fab fa-facebook pad topbar-social-item"></i> */}
                <a
                  href="/"
                  className="pad topbar-social-item fab fa-instagram fa-2x"
                />
                <a
                  href="/"
                  className="pad topbar-social-item fab fa-pinterest-p fa-2x"
                />
                <a
                  href="/"
                  className="pad topbar-social-item fab fa-snapchat-ghost fa-2x"
                />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="text-center">
              {/* Images to be hosted on CLOUD */}
              {/* <img
                // src="https://s3.ap-south-1.amazonaws.com/ninjas-in-pajamas-4/logo/web_hi_res_512.png"
                src=" "
                alt="IMG-LOGO"
              /> */}
              <h3>
                <b>Make Me Builder</b>
              </h3>
            </div>
          </div>
          <div className="col-sm">
            <div className="">
              {props.user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Profile
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link class="dropdown-item" to="/user">
                      View Profile
                    </Link>
                    <Link class="dropdown-item" to="/cart">
                      Cart
                    </Link>
                    <Link class="dropdown-item" to="/admin">
                      Admin
                    </Link>

                    <a class="dropdown-item" href="/auth/logout">
                      Logout
                    </a>
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
            <li>
              <a
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold"
                }}
                href="http://localhost:5000/auth/logout"
              >
                Logout
              </a>
            </li>
            <li className="nav-item ">
              <NavLink
                exact={true}
                to="/supplier"
                activeClassName="active"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Supplier Panel
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

export default Header;
