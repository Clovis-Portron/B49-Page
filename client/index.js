import React from 'react';
import ReactDOM from 'react-dom'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './../app/App.jsx';

import './../app/App.scss';

window.addEventListener('load', () => {
    ReactDOM.hydrate(<App />, document.querySelector('#root'));
});