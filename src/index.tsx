import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

// TODO make this better somehow
(window as any).g_params = window.location.search.slice(1)
  .split('&')
  .reduce((o: any, q) => {
    const [k, v] = q.split('=');
    o[k] = v;
    return o;
  }, {})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
