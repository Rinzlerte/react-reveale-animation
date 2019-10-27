import React from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import { useState } from 'react';
import Spin from 'react-reveal/Spin';

import image from '../../Resources/images/architectural-design.jpg';

const AboutBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="About"/>
                <figcaption>
                    <h2>our<span>About</span>page</h2>
                    <p>just push button</p>
                    <Spin top when={!state}>
                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                    </Spin>
                </figcaption>
            </div>
        );
    }

export default AboutBox;