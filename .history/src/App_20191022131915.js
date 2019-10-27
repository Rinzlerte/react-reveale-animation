import React, { Component } from 'react';
import Home from './components/home/Home';
// import Main from './components/main/Main';
// import Navigation from './components/navigation/Navigation';
// 
import About from './components/featured/About';
import Inform from './components/featured/Inform';

import { BrowserRouter, Route } from 'react-router-dom';


import './Resources/styles.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route exact path="/" render={() => <Home />} />
        <Route path="/inform" render={() => <Inform />}/>
        <Route path="/contacts" render={() => <Contacts />}/>
 <Route path="/about" render={() => <About />}/>
      </BrowserRouter>
    )
  }
}
// <Route path="/main" render={() => <Main />}/>
// <Route path="/menu" render={() => <Navigation />}/>
 
