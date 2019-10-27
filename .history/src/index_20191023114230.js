import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
    return (
      <BrowserRouter>
        <Routes {...props}/>
      </BrowserRouter>
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));


