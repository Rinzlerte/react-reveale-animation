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
                    <h2>Inspirin <span>Development</span>#1</h2>
                    <p>male a deal</p>
                  
                </figcaption>
            </div>
        );
    }

export default SecondAboutBox;