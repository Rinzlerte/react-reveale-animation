import React from 'react';
import Carousel from 're-carousel';

import slide1 from '../../Resources/images/wallpapers/camera.jpg'
import slide2 from '../../Resources/images/wallpapers/camera.jpg'
import slide3 from '../../Resources/images/wallpapers/camera.jpg'


const Slider = () => {

    const imgStyles = {

    }

    return (
        <Carousel auto="true" loop="true" interval="3500" duration="300">
            <div style={{
                background: `url(${slide1})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            <div style={{
                background: `url(${slide2})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            <div style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
        </Carousel>
    );
};

export default Slider;