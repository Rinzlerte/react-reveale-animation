import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

// import image from '../../Resources/images/aerial-cloud.jpg';

const About = (props) => {
    const [state, setState] = useState(true);
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`, display:`flex`}} onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
            <h1>{props.title}</h1>
        </div>
    );
};
export default About;