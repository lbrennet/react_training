import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
class App extends React.Component {
  render()  {
    return  (
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
v
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
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous

  // second niveau
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous

export default App;
