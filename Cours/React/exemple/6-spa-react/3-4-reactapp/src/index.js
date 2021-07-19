import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './App.js';
import reducer from './reducer.js';
import * as ACTIONS from './actions.js';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector("#root")
);
setInterval(function(){
      var time = store.getState().time; //enlever 1sec
      store.dispatch(ACTIONS.incr_time(time));
    }, 1000);
setInterval(function(){
      var time2 = store.getState().time2; //enlever 1sec
      store.dispatch(ACTIONS.decr_time(time2));
    }, 1000);
