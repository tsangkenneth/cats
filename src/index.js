import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import catItems from './reducers';
import { getCatItems } from './actions';
import App from './components/App';
import './index.css';

let store = createStore(
  catItems,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(getCatItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
