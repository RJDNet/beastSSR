import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Routes
import Routes from './Routes';

const axiosInstance = axios.create({
  baseURL: '/api'
});

// Create redux store
const store = createStore(reducers, window.INITIAL_STATE || {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);