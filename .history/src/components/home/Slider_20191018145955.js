import React from 'react';
import Carousel from 're-carousel';

const Slider = () => {
    return (
        <Carousel auto="true" loop="true" interval="1500" duration="300">
            <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
            <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
        </Carousel>
    );
};

export default Slider;