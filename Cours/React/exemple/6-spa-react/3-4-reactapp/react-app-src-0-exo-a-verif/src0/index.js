import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './App';
import reducer from "./reducer";
import * as ACTIONS from "./actions";
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
setInterval(function () {
  store.dispatch(ACTIONS.decr_time());
  store.dispatch(ACTIONS.incr_time());
}, 1000);
