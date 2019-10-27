import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const Inform = () => {
    return (
        <div style={{ backgroundColor: `red`}}>
            <h1>Inform Page</h1>
            <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
        </div>
    );
};

export default Inform;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Navigation.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Navigation = () =>  {

    const classes = useStyles();
    
    return(
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
                <Link  className="menu-box-link" to="/">
                    <ListItemText primary="HOME"/>
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
        </List>
    </div>
);
}

export default Navigation;