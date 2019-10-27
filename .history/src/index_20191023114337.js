import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/styles.css'
import { BrowserRouter } from 'react-router-dom';

import Routes from "./Routes";

const App = (props) => {
    return (
      <BrowserRouter>
        <Routes {...props}/>
      </BrowserRouter>
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));


