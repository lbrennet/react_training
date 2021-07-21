import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App(props){
  return (
    <BrowserRouter>
    <Switch>
    // pour éviter de prendre en compte toutes les routes parent "switch"
      <Route exact path="/" render={() => <div>Home page</div>}/>
      <Route path="/app" render={() => <div> Route /app</div>}/>
      <Route render={() => <div> Url inconnue</div>}/>
    </Switch>
    </BrowserRouter>
  )

}


export default App;
