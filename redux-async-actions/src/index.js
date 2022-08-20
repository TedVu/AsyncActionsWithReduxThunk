import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";

import App from "./App";

ReactDOM.render(
  <Provider store={configureStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
