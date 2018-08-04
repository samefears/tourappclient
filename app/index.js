import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Containers/Main';
import './Styles/main.scss';

function renderApp() {
  ReactDOM.render( <Main/> , document.getElementById('main'));
}

renderApp();

module.hot.accept(renderApp);