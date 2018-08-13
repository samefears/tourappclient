import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Input from '../Components/Input';
import Button from '../Components/Button';

import { signupUser } from '../actions';

var strongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

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
    passwordError: false,
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  _signupUser = (e) => {
    e.preventDefault();
    this.props
      .signupUser(
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName
      )
      .then((data) => this.props.history.push('/'));
  };

  _handlePasswordField = (e) => {
    const isValid = strongRegex.test(e.target.value);
    if (!isValid && this.state.password.length !== 0) {
      this.setState({
        passwordError: true,
      });
    } else if (
      (isValid && this.state.passwordError) ||
      this.state.password.length === 0
    ) {
      this.setState({
        passwordError: false,
      });
    }
  };

  _updateField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <form>
        <h2>Sign Up</h2>
        <Input
          type="email"
          label="Email"
          onChange={ this._updateField }
          value={ this.state.email }
          id="email"
        />
        <Input
          label="First Name"
          onChange={ this._updateField }
          value={ this.state.firstName }
          id="firstName"
          type="text"
        />
        <Input
          label="Last Name"
          onChange={ this._updateField }
          value={ this.state.lastName }
          id="lastName"
          type="text"
        />
        <Input
          label="Password"
          onBlur={ this._handlePasswordField }
          id="password"
          value={ this.state.password }
          type="password"
        />
        <Button
          className="Button-submit"
          value="Login"
          disabled={
            this.state.passwordError ||
            !this.state.lastName ||
            !this.state.firstName ||
            !this.state.email
          }
          onClick={ this._signupUser }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  error: state.authReducer.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ signupUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
