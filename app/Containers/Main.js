
import React, {
  Component
} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Tours from './Tours';
import Chat from './Chat';
import Nav from './Nav';
import propTypes from 'prop-types';

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
