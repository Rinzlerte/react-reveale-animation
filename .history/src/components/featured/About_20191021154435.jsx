import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const About = () =>  {
    return(
    <div className="about container"  style={{ height:`${window.innerHeight}px`}}>
            <h1>About PAGE</h1>

    
        
        <div className="footer">
            <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
		</div>
    </div>
    );
}

export default About;