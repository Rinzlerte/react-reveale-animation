import React from 'react';
import {CrossBtn} from '../ui/CrossBtn';

import image from '../../Resources/images/architectural-design.jpg';

const AboutBox = (props)=> {
        return (
            <div className="connetcion-box">
                <img src={image} alt="About"/>
                <figcaption>
                    <h2>our<span>About</span>page</h2>
                    <p>just push button</p>
                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/about" zIndex={props.zIndex}/>
                </figcaption>
            </div>
        );
    }

export default AboutBox;