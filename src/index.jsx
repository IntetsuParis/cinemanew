import React from "react";

import ReactDOM from "react-dom/client";

import store from "./components/Home/store/store";
import { Provider } from "react-redux";

import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
