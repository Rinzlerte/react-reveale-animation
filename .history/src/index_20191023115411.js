import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";

import './Resources/styles.css'

const App = (props) => {
    return (
      <BrowserRouter>
        <Routes {...props}/>
      </BrowserRouter>
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));


