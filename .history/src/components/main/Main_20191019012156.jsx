import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


 

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            checked: false,
            setChecked: false
        }
      }

    render(){
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
                <Slide direction="up"  mountOnEnter unmountOnExit>
                    <Paper elevation={4} style={{width:`50%`, height:`100%`}}>
                    
                    </Paper>
                </Slide>
                <Slide direction="down" mountOnEnter unmountOnExit>
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
