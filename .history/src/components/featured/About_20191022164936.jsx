import React from 'react';
import {Backbtn} from '../ui/BackBtn';

const About = () =>  {
    return(
    <div className="container"  style={{ height:`${window.innerHeight}px`, backgroundColor:`green`}}>
            <h1>About PAGE</h1>
        <div className="footer">
            <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
		</div>
    </div>
    );
}

export default About;