import React from 'react';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

import { AroowBtn } from '../../ui/Icon';

const Home = () => {
    return (
        <div  className="home">
            <Header />
            <Footer/>
        </div>
    );
};

export default Home;