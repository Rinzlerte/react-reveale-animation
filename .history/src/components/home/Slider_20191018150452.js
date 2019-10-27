import React from 'react';
import Carousel from 're-carousel';

import slide1 from '../../resources/img/Ariana1.jpg';
import slide2 from '../../resources/img/Ariana2.jpg';
import slide3 from '../../resources/img/Ariana3.jpg';

const Slider = () => {

    const imgStyles = {

    }

    return (
        <Carousel auto="true" loop="true" interval="3500" duration="300">
            <div style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            <div style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}>Frame 2</div>
            <div style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}>Frame 3</div>
        </Carousel>
    );
};

export default Slider;