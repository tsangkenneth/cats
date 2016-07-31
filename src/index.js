import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import catItems from './reducers';
import { addCatItems } from './actions';
import App from './components/App';
import './index.css';

let store = createStore(catItems);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addCatItems());

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
