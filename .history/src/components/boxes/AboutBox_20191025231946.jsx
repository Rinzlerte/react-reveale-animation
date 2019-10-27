import React from 'react';
import {CrossBtn} from '../ui/CrossBtn';

import image from '../../Resources/images/architectural-design.jpg';

const AboutBox = ()=> {
        return (
            <div className="content box" style={{backgroundImage: `url(${image})`}}>
            <span className="aboutspan"></span>
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
            </div>
        );
    }

export default AboutBox;