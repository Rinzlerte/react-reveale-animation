import React from 'react';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

import { AroowBtn } from '../../ui/Icon';

const Home = () => {
    return (
        <div  className="home">
            <Header />
            <AroowBtn width="60px" height="60px" link="true" linkTo="https://www.gatsbyjs.org" />
        </div>
    );
};

export default Home;