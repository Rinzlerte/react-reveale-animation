import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const About = () =>  {
    return(
    <div className="container"  style={{ height:`${window.innerHeight}px`}}>
            <h1>About PAGE</h1>
        <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
    </div>
    );
}

export default About;