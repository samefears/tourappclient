import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { loginUser, signupUser, logoutUser } from '../actions';

class Main extends Component {
  static propTypes = {
    profile: PropTypes.object,
    isLoggedIn: PropTypes.bool,
    loginUser: PropTypes.func,
    signupUser: PropTypes.func,
    logoutUser: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  loginUser = () => {
    this.props.loginUser(this.state.email, this.state.password);
  };

  logoutUser = () => {
    this.props.logoutUser(this.state.email, this.state.password);
  };

  signupUser = () => {
    this.props.signupUser(
      this.state.email,
      this.state.password,
      this.state.firstName,
      this.state.lastName
    );
  };

  updateField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          {/* <div>
            <h2>Log In</h2>
            <div>
              <label htmlFor="emailLogin">Email</label>
              <input
                type="email"
                onChange={ this.updateField }
                name="emailLogin"
                id="email"
                value={ this.state.email }
              />
            </div>
            <div>
              <label htmlFor="passwordLogin">Password</label>
              <input
                type="password"
                onChange={ this.updateField }
                name="passwordLogin"
                id="password"
                value={ this.state.password }
              />
            </div>

            <button onClick={ this.loginUser }>Login</button>
          </div> */}
          <div>
            <h2>Sign In</h2>
            <div>
              <label htmlFor="emailSignup">Email</label>
              <input
                type="email"
                onChange={ this.updateField }
                name="emailSignup"
                id="email"
                value={ this.state.email }
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="firstName"
                onChange={ this.updateField }
                id="firstName"
                value={ this.state.firstName }
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="lastName"
                onChange={ this.updateField }
                id="lastName"
                value={ this.state.lastName }
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={ this.updateField }
                id="password"
                name="password"
                value={ this.state.password }
              />
            </div>
            <button onClick={ this.signupUser }>Login</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={ this.logoutUser }>Logout</button>
          <div>
            <p>
              Logged in as {this.props.profile.firstName} {this.props.profile.lastName}
            </p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginUser, signupUser, logoutUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
