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
            <ListItem button>
                <Link  className="menu-box-link" to="/">
                    <ListItemText primary="Home"/>
                </Link>
            </ListItem>
            <Divider/>
            <ListItem button>
                <Link className="menu-box-link" to="/about">
                    <ListItemText primary="About"/></Link>
                </ListItem>
            <Divider/>
            <ListItem button>
                <Link className="menu-box-link" to="/proects">
                    <ListItemText primary="Some"/></Link>
                </ListItem>
            <Divider/>
            <ListItem button>
                <Link className="menu-box-link" to="/contacts">
                    <ListItemText primary="contacts"/>
                </Link>
            </ListItem>
        </List>
    </div>
);

export default Navigation;