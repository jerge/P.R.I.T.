import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import history from './history'
import './App.css';

import HomeScreen from './components/screens/home/index';
import AboutScreen from './components/screens/omprit/index';
import HubbenScreen from './components/screens/hubben/index';
import PatetScreen from './components/screens/patet/index';
import TurquoiseScreen from './components/screens/turquoise/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <HomeScreen/>
            </Route>

            <Route path="/omprit" exact>
              <AboutScreen></AboutScreen>
            </Route>

            <Route path="/pateter" exact>
              <PatetScreen></PatetScreen>
            </Route>

            <Route path="/hubben" exact>
              <HubbenScreen></HubbenScreen>
            </Route>

            <Route path="/hubben-2-1" exact>
              <HubbenScreen></HubbenScreen>
            </Route>

            <Route path="/riktigturkos" exact>
              <TurquoiseScreen></TurquoiseScreen>
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