/*********
* REACT
**********/
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//import {Provider} from 'react-redux'

/* Create Counter component which takes value, onIncrement, and onDecrement as its parameters */
const Counter = ({ value, onIncrement, onDecrement, onReset }) =>
React.createElement("div", { id: "counter-app" },
React.createElement("div", { id: "display-container", className: "container" },
React.createElement("p", { id: "display" }, value)),

React.createElement("div", { id: "buttons-container", className: "container" },
React.createElement("button", { id: "increment-button", className: "button", onClick: onIncrement }, React.createElement("i", { className: "fa fa-plus" })),
React.createElement("button", { id: "decrement-button", className: "button", onClick: onDecrement }, React.createElement("i", { className: "fa fa-minus" })),
React.createElement("button", { id: "reset-button", className: "button", onClick: onReset }, React.createElement("i", { className: "fa fa-refresh" }))));




/* Wrapper function for ReactDOM.render functionality for the app */
const render = () => {
  ReactDOM.render(
  React.createElement(Counter, {
    value: store.getState(),
    onIncrement: () => {
      const val = store.getState();
      if (val < 99) {
        store.dispatch({
          type: 'INCREMENT' });

      }
    },
    onDecrement: () => {
      const val = store.getState();
      if (val > 0) {
        store.dispatch({
          type: 'DECREMENT' });

      };
    },
    onReset: () => {
      store.dispatch({
        type: 'RESET' });

    } }),

  document.querySelector('#root'));

};

/*********
   * REDUX
   **********/

/* counter takes a default value for state, and an action */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;}

};

/* Import { createStore } from 'redux' */
// const { createStore } = Redux;
/* store uses counter as its reducer */
const store = createStore(counter);

/* When the state in store changes, use this function */
store.subscribe(render);

/* Initial render */
render();
