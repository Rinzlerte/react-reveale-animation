import React from 'react';
import { useState } from 'react';
// import Spin from 'react-reveal/Spin';
import {CrossBtn} from '../ui/CrossBtn';

import image from '../../Resources/images/architectural-design.jpg';

const SecondAboutBox = ()=> {
        return (
            <div className="connetcion-box" >
                <img src={image} alt="about"/>
                <figcaption>
                    <h2>Creating <span>Applications</span>#</h2>
                    <p>Making life smarter</p>
                  
                </figcaption>
            </div>
        );
    }

export default SecondAboutBox;