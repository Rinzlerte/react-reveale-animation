import React from 'react';
import { useState } from 'react';
import {Backbtn} from '../ui/BackBtn';

const About = () =>  {
    return(
        const [state, setState] = useState(true);
    return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                    <img src={image} alt="Connections"/>
                    <figcaption>
                        <h2>I think <span>secondary</span>= magic</h2>
                        <p>We just like to create WOW effects</p>
                        <Spin top when={!state}>
                            <CrossBtn  width="50px" height="50px"/>
                        </Spin>
                    </figcaption>
                </div>
    );
}

export default About;