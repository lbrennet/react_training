import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.querySelector("#root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
