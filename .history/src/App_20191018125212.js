import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/main/Home';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Home />
        </div>
      </BrowserRouter>
    )
  }
}
