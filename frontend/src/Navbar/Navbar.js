import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{"margin-bottom":"30px"}}>
        <div className="container">
          <Link class="navbar-brand" to="/">
            Lanqwich
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign in
                </a>
              </li> */}
              <li class="nav-item">
                <Link className="nav-link" to="/learning-path">
                  My Learning
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign out
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
