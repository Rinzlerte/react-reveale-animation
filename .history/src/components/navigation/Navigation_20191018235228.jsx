import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () =>  (
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
        <List className="menu-box">
            <ListItem>
                <Link  to="/">
                    <ListItemText primary="Home" className="menu-box-link"/>
                </Link>
            </ListItem>
            <Divider/>
            <ListItem><Link className="menu-box-link" to="/about">About</Link></ListItem>
            <Divider/>
            <ListItem><Link className="menu-box-link" to="/proects">Dashboard</Link></ListItem>
            <Divider/>
            <ListItem><Link className="menu-box-link" to="/contacts">Contacts</Link></ListItem>
        </List>
    </div>
);

export default Navigation;