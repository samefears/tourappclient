import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Input from '../Components/Input';
import Button from '../Components/Button';

import { loginUser } from '../actions';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    error: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  _loginUser = (e) => {
    e.preventDefault();
    this.props
      .loginUser(this.state.email, this.state.password)
      .then((data) => this.props.history.push('/'));
  };

  _updateField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <form>
        <h2>Log In</h2>
        {this.props.error && <p>Login Errors</p>}
        <Input
          label="Email"
          type="email"
          id="email"
          onChange={ this._updateField }
          value={ this.state.email }
          required
        />
        <Input
          label="Password"
          type="password"
          id="password"
          onChange={ this._updateField }
          value={ this.state.password }
          required
        />
        <Button
          classname="Button-submit"
          disabled={ !this.state.email || !this.state.password }
          onClick={ this._loginUser }
          value="Login"
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
  bindActionCreators({ loginUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
