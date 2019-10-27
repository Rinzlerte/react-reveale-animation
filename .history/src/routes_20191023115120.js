import React from "react";
import Layout from "./HOC/Layout";
import { Switch } from "react-router-dom";

import {Route } from 'react-router-dom';
import Home from './components/home/Home';
import Main from './components/main/Main';
// import SignIn from './components/Signin';


//Private Routes
import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import Adminmatches from './components/admin/matches';
import AddEditMatches from './components/admin/matches/AddEditMatches';
import AdminPlayers from './components/admin/players';
import AddEditPlayers from './components/admin/players/AddEditPlayers';
//Public Routes
import PublicRoute from './components/AuthRoutes/PublicRoute';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <Route {...props} path="/main" exact component={Main}/>
        <Route {...props} restricted={false} exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;