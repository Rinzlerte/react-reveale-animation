import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const Main = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
            
            





            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/"
                />
            </div>
       </div>
    );
};

export default Main;