import React, { Component } from 'react';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';
import Contacts from './components/contacts/Contacts';

import { BrowserRouter, Route } from 'react-router-dom';


import './Resources/styles.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route exact path="/" render={() => <Home />} />
        <Route path="/main" render={() => <Main />}/>
        <Route path="/menu" render={() => <Navigation />}/>
        <Route path="/contacts" render={() => <Contacts />}/>
      </BrowserRouter>
    )
  }
}
