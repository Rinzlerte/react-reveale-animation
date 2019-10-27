import React from "react";
import Layout from "./HOC/Layout";
import { Switch } from "react-router-dom";

import Home from './components/home/Home';
// import SignIn from './components/Signin';



const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match/" exact component={AddEditMatches}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatches}/>
        <PrivateRoute {...props} exact component={Adminmatches} path="/admin_matches" />
        <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
        <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in" />
        <PublicRoute {...props} restricted={false} exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;