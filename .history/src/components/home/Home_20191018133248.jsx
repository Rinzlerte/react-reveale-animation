import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';

import Slider from 'react-slick';

const Home = () => {
    return (
        <div nclassName="container">
            <Header />
            <AroowBtn width="60px" height="60px" />
        </div>
    );
};

export default Home;