import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

function App(props){
  return(
    <Switch>
    //pour eviter de prendre et compte toutes les routes parent "switch"
      <Route exact path="/" render={()=><div>Route root</div>} />
      <Route path="/app" render={()=><div>Route /app</div>} />
      //pour prevoir le cas des url fausses
      <Route render={()=><div>Route inconnue</div>} />
    </Switch>
  )
}
export default App;
