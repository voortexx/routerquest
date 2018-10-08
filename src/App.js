import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Historique from "./Historique";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            Accueil
          </NavLink>
          <NavLink to="/notre-histoire"> Historique </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={Historique} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
