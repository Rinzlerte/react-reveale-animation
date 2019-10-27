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

  const classes = useStyles();

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            checked: false,
            setChecked: false
        }
      }


    handleChange = () => {
        this.setState({
            setChecked: !setChecked
        })
    };


    render(){
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={this.handleChange} />}
                    label="Show"
                />
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} style={{width:`50%`, height:`100%`}}>
                    
                    </Paper>
                </Slide>
                <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} style={{width:`50%`, height:`100%`}}>
                
                    </Paper>
                </Slide>
                <div className="footer">
                    <ArrowBtn 
                        width="56px" height="56px" link="true" linkTo="/"
                    />
                </div>
        </div>
        );
    }
}
