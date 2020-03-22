import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
// import store from "../store";
// import { logoutUser } from "../actions/authActions";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Lanqwich</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/arabic/course">Get Started</Nav.Link>
              <Nav.Link href="/arabic/vocabulary">Vocabulary</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null, null, {
  pure: false // learn more about this
})(withRouter(Header));

// import React from "react";
// import { NavLink, Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import store from "../store";
// import { logoutUser } from "../actions/authActions";
// import "./Navbar.css";

// class Navbar extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       activeMenu: ""
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   logoutUser() {
//     // Logout user
//     store.dispatch(logoutUser()); // Redirect to login
//     window.location.href = "/";
//   }

//   handleClick = e => {
//     this.setState({ activeMenu: e.target.id });
//     //console.log(e.target.id);
//   };

//   render() {
//     return (
//       <nav
//         class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
//         style={{ "margin-bottom": "30px" }}
//       >
//         <div className="container">
//           <Link class="navbar-brand" to="/">
//             Lanqwich
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon" />
//           </button>
//           <div
//             class="collapse navbar-collapse justify-content-end"
//             id="navbarNavDropdown"
//           >
//             <ul class="navbar-nav">
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/"
//                   activeClassName="active"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/login"
//                   activeClassName="active"
//                   style={{
//                     display: this.props.auth.isAuthenticated ? "none" : ""
//                   }}
//                 >
//                   Log in
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/register"
//                   activeClassName="active"
//                   style={{
//                     display: this.props.auth.isAuthenticated ? "none" : ""
//                   }}
//                 >
//                   Sign up
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   to="/arabic"
//                   activeClassName="active"
//                 >
//                   My Arabic Journey
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/logout"
//                   onClick={this.logoutUser}
//                   style={{
//                     display: this.props.auth.isAuthenticated ? "" : "none"
//                   }}
//                 >
//                   Log out
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// Navbar.propTypes = {
//   auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth
// });
// export default connect(mapStateToProps, null, null, {
//   pure: false // learn more about this
// })(withRouter(Navbar));
