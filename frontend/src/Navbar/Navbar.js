import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../store";
import { logoutUser } from '../actions/authActions'

class Navbar extends React.Component {
  logoutUser() {
    // Logout user
    store.dispatch(logoutUser()); // Redirect to login
    window.location.href = "./login";
  }

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
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li> */}
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/login" style={{ "display": this.props.auth.isAuthenticated ? "none" : ""}}>
                  Log in
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/register" style={{ "display": this.props.auth.isAuthenticated ? "none" : ""}}>
                  Sign up
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link className="nav-link" to="/tiny-editor">
                  Tiny Editor
                </Link>
              </li>  */}
              <li class="nav-item active">
                <Link className="nav-link" to="/learning-path">
                  My Arabic Journey <span class="sr-only">(current)</span>
                </Link> 
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/logout" onClick={this.logoutUser} style={{ "display": this.props.auth.isAuthenticated ? "" : "none"}}>
                  Log out
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

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {})(withRouter(Navbar));