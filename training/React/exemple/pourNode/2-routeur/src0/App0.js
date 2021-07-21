import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App(props){
  return(
    <BrowserRouter>
      <Switch>
      //pour eviter de prendre et compte toutes les routes parent "switch"
        <Route path="/" render={()=><div>Route root</div>} />
        <Route path="/app" render={()=><div>Route /app</div>} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
