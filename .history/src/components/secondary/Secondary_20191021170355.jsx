import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { CrossBtn} from '../ui/Crossbtn';
import './Secondary.css';


// <Slide right>
//                     <div className="connections">
//                         <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
//                     </div>
//                 </Slide>
               

export default class Secondary extends Component {
    render() {
        return (
            <div className="secondary" style={{display:`flex`, height:`${window.innerHeight}px`, position: `absulute`, zIndex: `1`}}>
                <Slide left>
                    <div className="connections">
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
                    </div>
                </Slide>
                <div className="secondary-box">
                    <div className="box"></div>
                    <Slide right>
                        <div className="box" style={{backgroundColor: `orange`}}></div>
                    </Slide>
                </div>
            </div>
        )
    }
}
