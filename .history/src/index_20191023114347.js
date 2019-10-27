import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './Resources/styles.css'

import Routes from "./Routes";

const App = (props) => {
    return (
      <BrowserRouter>
        <Routes {...props}/>
      </BrowserRouter>
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));


