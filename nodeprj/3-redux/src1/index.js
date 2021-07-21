import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './App.js';
import reducer from './reducer.js';
import * as ACTIONS from './actions.js';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector("#root")
);

setInterval(function(){
      var time = store.getState().time; //enlever 1sec
      var time2 = store.getState().time2;
      store.dispatch(ACTIONS.decr_time(time));
      store.dispatch(ACTIONS.incr_time(time2));
    }, 1000);
