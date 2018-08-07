import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Containers/Main';
import './Styles/main.scss';
import { BrowserRouter } from 'react-router-dom'

function renderApp() {
  ReactDOM.render((<BrowserRouter><Main /></BrowserRouter>) , document.getElementById('main'));
}

renderApp();

module.hot.accept(renderApp);