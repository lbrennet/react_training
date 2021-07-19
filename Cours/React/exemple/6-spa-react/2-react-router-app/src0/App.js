import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
class App extends React.Component {
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
          {/*Link evite de recharger la page */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apropos">A propos</Link></li>
            <li><Link to="/sujets">Sujets</Link></li>
          </ul>
          <hr />
          <div className="main-route-place">
          <Switch>
            {/*pour eviter de prendre et compte toutes les routes parent "exact" */}
              <Route exact path="/" component={Home} />
              <Route path="/apropos" component={Apropos} />
              <Route path="/sujets" component={Sujets} />
              {/* pour prevoir le cas des url fausses */}
              <Route component={Erreur} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
class Home extends React.Component {
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class Apropos  extends React.Component {
  render() {
    return (
      <div>
        <h2>A Propos</h2>
      </div>
    );
  }
}
class Sujets extends React.Component {
  render( ) {
    return (
      <div>
        <h2>Sujets</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <div className="secondary-route-place">
          <Route
          //route second niveau pour afficher juste l'url
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>Please select a topic.</h3>
            }
            />
        </div>
      </div>
    );
  }
}
class Erreur extends React.Component {
  render()  {
    return (
      <div>
        <p>route inconnue</p>
      </div>
    );
  }
}
// second niveau
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    );
  }
}
export default App;
