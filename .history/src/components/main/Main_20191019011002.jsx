import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      height: 180,
    },
    wrapper: {
      width: 100 + theme.spacing(2),
    },
    paper: {
      zIndex: 1,
      position: 'relative',
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));

const Main = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };

    return (
        <div className="home" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{backgroundColor: `white`}}>
                
            </Slide>
            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/"
                />
            </div>
       </div>
    );
};

export default Main;