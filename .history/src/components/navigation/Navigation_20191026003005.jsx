import React from 'react';
import Flip from 'react-reveal/Flip';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Navigation.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      width: '50%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

const Navigation = () =>  {
    const classes = useStyles();
    return(
        <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <Flip>
                    <Divider/>
                    <ListItem button>
                        <Link  className="menu-box-link" to="/proects">
                            <ListItemText primary="PROECTS"/>
                        </Link>
                    </ListItem>
                    <Divider/>
                        <ListItem button>
                        <Link className="menu-box-link" to="/about">
                            <ListItemText primary="ABOUT"/></Link>
                        </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Link className="menu-box-link" to="/inform">
                            <ListItemText primary="INFORM"/></Link>
                        </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Link className="menu-box-link" to="/contacts">
                            <ListItemText primary="CONTACTS"/>
                        </Link>
                    </ListItem>
                    <Divider/>
                </Flip>
            </List>
            <div to="/" className="loseBtn">
            </div>
        </div>
    );
}

export default Navigation;