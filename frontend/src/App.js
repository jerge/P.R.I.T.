import React, { Component } from "react";
import { Route, Switch } from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import history from "./history";
import "./App.css";

import HomeScreen from "./components/screens/18/home/index";
import AboutScreen from "./components/screens/18/omprit/index";
import HubbenScreen from "./components/screens/18/hubben/index";
import PatetScreen from "./components/screens/18/patet/index";
import TurquoiseScreen from "./components/screens/18/turquoise/index";
//import Home17 from "./components/screens/17/home/index.html";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history} basename="/18">
          <Switch>
            <Route path="/omprit" exact>
              <AboutScreen />
            </Route>

            <Route path="/pateter" exact>
              <PatetScreen />
            </Route>

            <Route path="/hubben" exact>
              <HubbenScreen />
            </Route>

            <Route path="/hubben-2-1" exact>
              <HubbenScreen />
            </Route>

            <Route path="/riktigturkos" exact>
              <TurquoiseScreen />
            </Route>

            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

/*
import React from 'react';
import ReactDOM from 'react-dom';
import About from './about.js';
import img from "../dist/public/images/digitlogo.png";

const App = props => (
  <div style={mainDivisionStyle}>
    <img style={imgStyle} src={img}/>
    <p style={linkDivisionStyle}>
      <a style={linkStyle} href="mailto:digit@chalmers.it">digit@chalmers.it</a> |
      <a style={linkStyle} href="https://irc.chalmers.it">#digIT on irc.chalmers.it</a> |
      <a style={linkStyle} href="https://www.facebook.com/digitchalmers">Facebook</a> |
      <a style={linkStyle} href="https://twitter.com/digITcth">Twitter</a> |
      <a style={linkStyle} href="https://github.com/cthit">GitHub</a></p>
    <About/>
  </div>
);

//Css styling

const mainDivisionStyle={
  textAlign: 'center'
}

const imgStyle={
  width: '420px',
  height: '420px',
}

const linkStyle= {
  color: '#467382',
  textDecoration: 'none',
  paddingLeft: '5px',
  paddingRight: '5px'
}

const linkDivisionStyle= {
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default App
*/
