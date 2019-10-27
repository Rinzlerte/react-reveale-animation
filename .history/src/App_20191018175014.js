import React, { Component } from 'react';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';

import { BrowserRouter, Route } from 'react-router-dom';


import './Resources/styles.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route exact path="/" render={() => <Home />} />
        <Route path="/menu" render={() => <Navigation />}/>
      </BrowserRouter>
    )
  }
}
