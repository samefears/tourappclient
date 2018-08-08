import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from './Containers/App';
import './Styles/main.scss';

window.axios = axios;

const token = localStorage.getItem('tourToken');

import reducers from './reducers';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...[reduxThunk]));
const store = createStore(reducers, enhancer);

if (token) {
  // we need to update application state
  const parsedToken = JSON.parse(token);
  store.dispatch({
    type: 'LOGIN_USER',
    payload: {
      id: parsedToken.id,
      firstName: parsedToken.firstName,
      lastName: parsedToken.lastName,
      email: parsedToken.email,
      token: parsedToken.token,
    },
  });
}

function renderApp() {
  ReactDOM.render(
    <Provider store={ store }>
      <App isLoggedIn={ token !== 'undefined' } />
    </Provider>,
    document.getElementById('main')
  );
}

renderApp();

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept(renderApp);
}
