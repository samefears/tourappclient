import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Containers/Main';
import './Styles/main.scss';

function renderApp() {
  ReactDOM.render(<Main />, document.getElementById('main'));
}

renderApp();

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept(renderApp);
}
