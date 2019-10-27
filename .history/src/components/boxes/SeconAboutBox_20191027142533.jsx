import React from 'react';

import image from '../../Resources/images/aple_cable.jpg';

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