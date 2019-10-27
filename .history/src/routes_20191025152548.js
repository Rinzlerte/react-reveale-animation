import React from "react";
import { Switch } from "react-router-dom";

import {Route } from 'react-router-dom';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Secondary from './components/secondary/Secondary';
import Menu from './components/navigation/Navigation';





import About from './components/featured/About';
import Contacts from './components/featured/Contacts';
import Inform from './components/featured/Inform';

const Routes = (props) => {
  return (
      <Switch>
        <Route {...props} path="/main" exact component={Main}/>
        <Route {...props} path="/menu" exact component={Menu}/>
        <Route {...props} path="/secondary" exact component={Secondary}/>
        <Route {...props} path="/about" exact component={About}/>
        <Route {...props} path="/contacts" exact component={Contacts}/>
        <Route {...props} path="/inform" exact component={Inform}/>
        <Route {...props} restricted={false} exact component={Home} path="/" />
      </Switch>
  );
};

export default Routes;