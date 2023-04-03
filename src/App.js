//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News';
//import News from './componets/News';

export default class App extends Component {
  render() {
    return (
      <div className='contanier'>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

