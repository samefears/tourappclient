import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Containers/Main';
import './styles/main.scss';

function renderApp() {
  ReactDOM.render(<Main />, document.getElementById('main'));
}

renderApp();

module.hot.accept(renderApp);
