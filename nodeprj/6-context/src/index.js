// app.js
import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import './styles.css';
// On importe la classe `UserProvider`
import UserProvider from "./store/UserProvider";
const styles = {
  // autres instructions dans le css
  color:"crimson",
  textAlign: "center"
};
const App = () => (
  <div style={styles}>
    {/* A noter qu'aucune propriété n'est passée au composant `Hello` */}
    <Hello />
  </div>
);

render(
  /**
   * On pourrait tout à fait ne wrapper que les composants qui
   * nous intéressent
   * de notre app avec notre `UserProvider`
   */
  <UserProvider>
    <App />
  </UserProvider>,
  document.querySelector("#root")
);
