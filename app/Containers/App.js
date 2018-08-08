import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Tours from './Tours';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <div className="container">
            <Route exact path="/" component={ Main } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/signup" component={ Signup } />
            <Route exact path="/tours" component={ Tours } />
            <Route exact path="/chat" component={ Chat } />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
