import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Element} from 'react-scroll';

import './Resources/styles.css'

import Home from './components/home/Home';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';
import Contacts from './components/featured/Contacts';
import About from './components/featured/About';
import Inform from './components/featured/Inform';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route exact path="/" render={() => <Home />} />

        
        <Route path="/inform" render={() => <Inform />}/>
        <Route path="/main" render={() => <Element name="main"><Main /></Element>}/>

        <Route path="/menu" render={() => <Navigation />}/>
        <Route path="/contacts" render={() => <Contacts />}/>
        <Route path="/about" render={() => <About />}/>
      </BrowserRouter>
    )
  }
}
// 

