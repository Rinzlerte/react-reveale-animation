import React, { Component } from 'react';
import Home from './components/home/Home';
import Menu from './components/navigation/Navigation';

import { BrowserRouter } from 'react-router-dom';


import './Resources/styles.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Home />
        <Menu />
      </BrowserRouter>
    )
  }
}
