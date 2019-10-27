import React from 'react';
import Carousel from 're-carousel';
import ArrowBtn from '../ui/ArrowBtn';

import slide1 from '../../Resources/images/wallpapers/camera.jpg'
import slide2 from '../../Resources/images/wallpapers/apple.jpg'
import slide3 from '../../Resources/images/wallpapers/skate.jpg';

const Promoslider = () => (
    <div className="container" style={{position: `releative`}}>
        <Carousel auto loop interval={4000} duration={550}>
                    <div style={{
                        background: `url(${slide1})`,
                        height:`${window.innerHeight}px`,
                        backgroundSize: 'cover'
                    }}>
                    </div>
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
        <ArrowBtn  width="56px" height="56px"/>
    </div>
);

export default Promoslider;