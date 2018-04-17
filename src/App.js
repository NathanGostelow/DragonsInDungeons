import React, { Component } from 'react';
// import {BrowserRouter as Switch, BrowserRouter, Route, Link} from 'react-router-dom';
import Container from './Container/Container.js';
import Header from './Header/Header.js';
import "typeface-roboto";
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">

          <Header />
          <Container />
      </div>
    );
  }
}

export default App;
