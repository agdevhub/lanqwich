import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);

    //console.log(newUser);

    const res = await Axios.post(`/api/users/register`, newUser);
    //console.log(res.data);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 register-form">
            <form noValidate onSubmit={this.onSubmit}>
              <h4 class="text-center" style={{ "margin-bottom": "30px" }}>
                Register New Account
              </h4>
              <div class="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  class="form-control"
                />
              </div>
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
                  placeholder="Enter password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="Confirm password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
              </div>
              <button type="submit" class="btn btn-success btn-block">
                Register
              </button>
              <hr />
              <p class="text-center">Or</p>
              <Link to="/login" class="btn btn-info btn-block">
                Log In
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
