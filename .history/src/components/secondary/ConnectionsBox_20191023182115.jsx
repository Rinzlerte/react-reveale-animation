import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';

// background: `url(${image}) no-repeat`

import image from '../../Resources/images/architecture-black-and-white.jpg';

const ConnectionsBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src=`url(${image})` alt="Connections"/>
                <figcaption>
                    <h2>I think <span>secondary</span> is magic</h2>
                    <p>We just like to create WOW effects</p>
                    <Spin top when={!state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
                    </Spin>
                </figcaption>
            </div>
        );
}

export default ConnectionsBox;