import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Tours from './Tours';
import Chat from './Chat';
import AddTour from './AddTour';
import AddTourStep1 from './AddTourStep1';
import AddTourStep2 from './AddTourStep2';
import AddTourStep3 from './AddTourStep3';

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
            <Route exact path="/add-tour" component={ AddTour } />
            <Route exact path="/add-tour-step1" component={AddTourStep1} />
            <Route exact path="/add-tour-step2" component={AddTourStep2} />
            <Route exact path="/add-tour-step3" component={AddTourStep3} />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
