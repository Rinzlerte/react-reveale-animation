import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';

import image from '../../Resources/images/street_city.jpg';

const InformationBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="information"/>
                <figcaption>
                    <h2>Creating <span>Applications</span>#</h2>
                    <p>Making life smarter</p>
                    <Spin top when={!state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/information"/>
                    </Spin>
            </figcaption>
        </div>
    );
}

export default InformationBox;