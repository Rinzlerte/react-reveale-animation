import React from 'react';
import Carousel from 're-carousel';
import Home from '../home/Home';
import Main from '../main/Main';

const Globalslider = () => (
    <Carousel axis='y' auto='false' loop='false' interval={4000} duration={550}>
        <Home/>
        <Main/>
    </Carousel>
);

export default Globalslider;