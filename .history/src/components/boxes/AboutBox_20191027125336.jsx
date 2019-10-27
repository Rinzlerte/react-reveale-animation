import React from 'react';
import { useState } from 'react';
import Spin from 'react-reveal/Spin';
import {CrossBtn} from '../ui/CrossBtn';

import image from '../../Resources/images/architectural-design.jpg';

const AboutBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="about"/>
                <figcaption>
                <h2>Creating <span>Applications</span>#</h2>
                <p>Making life smarter</p>
                    <Spin top when={!state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                    </Spin>
                </figcaption>
            </div>
        );
    }

export default AboutBox;