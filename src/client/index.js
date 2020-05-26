import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";
// Read the state sent with markup
const state = window.__PRELOADED_STATE__;

// delete the state from global window object
delete window.__PRELOADED_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

window.onload = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
