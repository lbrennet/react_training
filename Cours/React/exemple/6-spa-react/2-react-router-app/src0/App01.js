import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App(props){
  return(
    <BrowserRouter>
      <Switch>
      //pour eviter de prendre et compte toutes les routes parent "switch"
        <Route exact path="/" render={()=><div>Home page</div>} />
        <Route path="/app" render={()=><div>Route /app</div>} />
        //pour prevoir le cas des url fausses
        <Route render={()=><div>Url inconnue</div>} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
