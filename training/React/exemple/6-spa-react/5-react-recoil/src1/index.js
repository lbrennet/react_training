import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import List from "./List";
//https://github.com/facebookexperimental/Recoil/pull/380 a tester
const rootElement = document.querySelector("#root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <List />
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
