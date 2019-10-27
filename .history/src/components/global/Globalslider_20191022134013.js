import React from 'react';
import Carousel from 're-carousel';
import Promoslider from '../home/Home';
import Main from '../main/Main';

const Globalslider = () => (
    <Carousel auto loop interval={4000} duration={550}>
        <Promoslider/>
        <Main/>
    </Carousel>
);

export default Globalslider;