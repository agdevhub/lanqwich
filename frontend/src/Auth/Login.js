import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import "./Auth.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/learning-path"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = async e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    // console.log(userData);
    // const res = await Axios.post(`/api/users/login`, userData);
    // console.log(res.data);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 login-form">
            <form noValidate onSubmit={this.onSubmit}>
              <h4 class="text-center" style={{ "margin-bottom": "30px" }}>Sign In</h4>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Your email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="Your password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <button type="submit" class="btn btn-success btn-block">
                Log In
              </button>
              <hr />
              <p class="text-center">Or</p>
              <Link to="/register" class="btn btn-info btn-block">
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Login);
