<<<<<<< HEAD
import React, {
  Component
} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Tours from './Tours';
import Chat from './Chat';
import Nav from './Nav';
=======
import React, { Component } from 'react';
import propTypes from 'prop-types';
>>>>>>> d9f87b2a1235cc183caa265041737b0f9bc83b3d

export default class Main extends Component {
  // static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
     <Nav />
    )
  }
}
