import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Resources/styles.css'

import Home from './components/home/Home';
import Main from './components/main/Main';


import About from './components/featured/About';
import Inform from './components/featured/Inform';

import Navigation from './components/navigation/Navigation';
import Contacts from './components/featured/Contacts';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route {...props} exact path="/" render={() => <Home />} />
        <Route path="/main" render={() => <Main />}/>
        <Route path="/inform" render={() => <Inform />}/>
        <Route path="/menu" render={() => <Navigation />}/>
        <Route path="/contacts" render={() => <Contacts />}/>
        <Route path="/about" render={() => <About />}/>
      </BrowserRouter>
    )
  }
}

