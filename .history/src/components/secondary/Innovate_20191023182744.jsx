import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';

import image from '../../Resources/images/apple-desk.jpg';

const InnovateBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="innovations-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="Connections"/>
                <figcaption>
                    <h2>We create <span>Innocations</span>!</h2>
                    <p>Using Innocations to improve</p>
                    <Spin top when={!state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/innovations"/>
                    </Spin>
                </figcaption>
            </div>
        );
}

export default InnovateBox;