import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/index';
import './FIREBASE';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} basename="/react-deploy">
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
