import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { signupUser } from '../actions';

class Signup extends Component {
  static propTypes = {
    signupUser: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  };

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  _signupUser = () => {
    this.props.signupUser(
      this.state.email,
      this.state.password,
      this.state.firstName,
      this.state.lastName
    );
  };

  _updateField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <div className="input-field">
          <label htmlFor="emailSignup">Email</label>
          <input
            type="email"
            onChange={ this._updateField }
            name="emailSignup"
            id="email"
            value={ this.state.email }
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            onChange={ this._updateField }
            id="firstName"
            value={ this.state.firstName }
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            onChange={ this._updateField }
            id="lastName"
            value={ this.state.lastName }
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={ this._updateField }
            id="password"
            name="password"
            value={ this.state.password }
          />
        </div>
        <button className="button-submit" onClick={ this._signupUser }>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ signupUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
