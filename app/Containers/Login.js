import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { loginUser } from '../actions';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
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

  _loginUser = () => {
    this.props.loginUser(this.state.email, this.state.password);
  };

  _updateField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <div className="input-field">
          <label htmlFor="emailLogin">Email</label>
          <input
            type="email"
            onChange={ this._updateField }
            name="emailLogin"
            id="email"
            value={ this.state.email }
          />
        </div>
        <div className="input-field">
          <label htmlFor="passwordLogin">Password</label>
          <input
            type="password"
            onChange={ this._updateField }
            name="passwordLogin"
            id="password"
            value={ this.state.password }
          />
        </div>

        <button className="button-submit" onClick={ this._loginUser }>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
