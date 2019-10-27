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

const Information = () =>  {

    const classes = useStyles();
    
    return(
    <div className="container"  style={{ height:`${window.innerHeight}px`}}>
    <h1>Inform Page</h1>
    <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
    </div>
);
}

export default Information;