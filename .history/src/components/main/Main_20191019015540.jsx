import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from '@material-ui/core/Slide';

import Company from './Company';
import Welcome from './Welcome';
 

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
        }
      }

    render(){
        return (
            <div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
                <Slide direction="right" in="true" timeout={600} mountOnEnter unmountOnExit>
                    <Company />
                </Slide>
                <Slide direction="left" in="true" timeout={600} mountOnEnter unmountOnExit style={{width:`50%`, height:`100%` }}>
                    <div elevation={4} style={{width:`50%`, height:`100%`, backgroundColor: `white`}}>
                    
                    <Welcome />
                    
                    </div>
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
