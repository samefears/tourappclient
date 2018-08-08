import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../actions';
class Nav extends Component {
  static propTypes = {
    logoutUser: PropTypes.func,
    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    isLoggedIn: PropTypes.bool,
  };

  _handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="main--nav">
        <div className="container">
          <div className="main--nav_left">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
            </ul>
          </div>
          <div className="main--nav_right">
            <ul>
              {this.props.isLoggedIn ? (
                <Fragment>
                  <li>Logged in as {this.props.profile.firstName}</li>
                  <li>
                    <button onClick={ this._handleLogout }>Logout</button>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  profile: state.authReducer.profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
