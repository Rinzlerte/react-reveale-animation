import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

// import image from '../../Resources/images/aerial-cloud.jpg';

const About = () => {
    const [state, setState] = useState(true);
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`, display:`flex`}} onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <Slide right when={state}>
                        <div className="container " style={{display:`flex`}}>
                            <Slide right when={state}>
                                <div className="side-wrapper">
                                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                                </div>
                            </Slide>
                            <Zoom when={state}>
                                <div className="side-wrapper">
                                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                                </div>
                            </Zoom>
                        </div>
                    </Slide>
            </div>
    );
};
export default About;