import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Home from './components/home/Home';

import './resources/style.css';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Home />
      </BrowserRouter>
    )
  }
}
