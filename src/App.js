//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News';
//import News from './componets/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 15;
  render() {
    return (  
      <div>
        <Router>
          <NavBar/>          
            <Switch>
              <Route exact path="/"><News key="general" pageSize={this.pagSize} country="in" category="general"/></Route>
              <Route exact path="/business"><News key="business" pageSize={this.pagSize} country="in" category="business"/></Route>
              <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pagSize} country="in" category="entertainment"/></Route>
              <Route exact path="/general"><News pageSize={this.pagSize}  country="in" category="general"/></Route>
              <Route exact path="/health"><News key="health" pageSize={this.pagSize} country="in"  category="health"/></Route>
              <Route exact path="/science"><News key="science" pageSize={this.pagSize}  country="in" category="science"/></Route>
              <Route exact path="/sports"><News key="sports" pageSize={this.pagSize} country="in"  category="sports"/></Route>  
              <Route exact path="/technology"><News key="technology" pageSize={this.pagSize} country="in" category="technology"/></Route>          
          </Switch>
        </Router>
      </div>
    )
  }
}

