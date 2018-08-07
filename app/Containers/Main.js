import React, {
  Component
} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Tours from './Tours';
import Chat from './Chat';
import Nav from './Nav';

export default class Main extends Component {
  render() {
    return (
     <Nav />
    )
  }
}