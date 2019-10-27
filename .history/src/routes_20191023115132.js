import React from "react";
import Layout from "./HOC/Layout";
import { Switch } from "react-router-dom";

import {Route } from 'react-router-dom';
import Home from './components/home/Home';
import Main from './components/main/Main';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route {...props} path="/main" exact component={Main}/>
        <Route {...props} restricted={false} exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;