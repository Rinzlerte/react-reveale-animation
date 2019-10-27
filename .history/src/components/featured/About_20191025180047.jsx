import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';
import Slide from 'react-reveal/Slide';

import image from '../../Resources/images/aerial-cloud.jpg';

const About = () => {
    const [state, setState] = useState(true);
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`, display:`flex`}} onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="Connections"/>
                <slide>
                    <div className="side-wrapper">
                    <figcaption>
                        <h2>I think <span>secondary</span>= magic</h2>
                        <p>We just like to create WOW effects</p>
                        <Spin top when={!state}>
                            <CrossBtn  width="50px" height="50px"/>
                        </Spin>
                    </figcaption>
                    </div>
                </slide>
            </div>
    );
};
export default About;