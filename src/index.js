import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.css';
import { Provider } from 'react-redux';
import App from './Components/App';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
