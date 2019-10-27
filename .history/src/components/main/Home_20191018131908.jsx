import React from 'react';
import Header from './header_footer/Header';
import { AroowBtn } from '../ui/Icon';

const Home = () => {
    return (
        <div  className="container">
            <Header />
            <AroowBtn width="60px" height="60px" />
        </div>
    );
};

export default Home;