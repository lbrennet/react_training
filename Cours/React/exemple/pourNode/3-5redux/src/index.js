import "./index.css";
import React, { useState } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import AnimatedComponent from "./AnimatedComponent";

const App = () => {
  const [version, setVersion] = useState({
    buttonText: "Use Top Left",
    useTopLeft: false
  });

  const onToggle = e => {
    setVersion({
      buttonText: version.useTopLeft ? "Use Top Left" : "Use Transform",
      useTopLeft: !version.useTopLeft
    });
  };

  return (
    <Provider store={store}>
      <div id="page">
        <h1>
          Utilisez le panneau des performances pour vérifier
          les mises à jour de la couche de peinture / composite
        </h1>
        <button onClick={onToggle}> {version.buttonText} </button>

        <AnimatedComponent version={version.useTopLeft} />
      </div>
    </Provider>
  );
};

render(<App />, document.querySelector("#root"));
