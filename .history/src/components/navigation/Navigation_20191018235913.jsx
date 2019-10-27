import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Navigation.css';
import {Link} from 'react-router-dom';
import { white, black } from 'material-ui/styles/colors';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: black,
      color: white
    },
  }));

const Navigation = () =>  {

    const classes = useStyles();
    
    return(
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
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
}

export default Navigation;