import React from 'react';
import Carousel from 're-carousel';
import Promoslider from '../home/Promoslider';



const Promoslider = () => (
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
            </Carousel>
);

export default Promoslider;