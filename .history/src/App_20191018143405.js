import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './resources/style.css';
import Home from './components/home/Home';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Home />
      </BrowserRouter>
    )
  }
}
