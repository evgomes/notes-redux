import React from "react";
import ReactDOM from "react-dom";

import Layout from "./hoc/Layout/Layout";
import App from "./App";

import { Provider } from "react-redux";
import store from "./state/store";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

const app = (
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
