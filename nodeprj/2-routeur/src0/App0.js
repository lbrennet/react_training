import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App(props){
  return (
    <BrowserRouter>
    <Switch>
    // pour éviter de prendre en compte toutes les routes parent "switch"
    <Route path="/app" render={() => <div> Route /app</div>}/>
      <Route path="/" render={() => <div> Route root</div>}/>
    </Switch>
    </BrowserRouter>
  )

}


export default App;
