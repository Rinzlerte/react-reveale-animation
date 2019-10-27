import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () =>  (
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
        <div className="menu-box">
            <Link className="menu-box-link" to="/">Home</Link>
            <Link className="menu-box-link" to="/about">About</Link>
            <Link className="menu-box-link" to="/proects">Dashboard</Link>
            <Link className="menu-box-link" to="/contacts">Contacts</Link>
        </div>
    </div>
);

export default Navigation;