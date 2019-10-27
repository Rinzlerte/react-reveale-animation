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
            <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
            <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
        </Carousel>
    );
};

export default Slider;