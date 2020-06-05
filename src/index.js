import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    	<Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
