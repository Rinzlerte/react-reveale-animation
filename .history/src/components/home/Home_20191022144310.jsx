import React from 'react';
import {Element} from 'react-scroll';
import {ArrowBtn} from '../ui/ArrowBtn';

import Intro from './intro/Intro';
import Main from './main/Main';

const Home = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Element name="to-home">
                <Intro />
            </Element>
            <Element name="to-main">
                <Main />
            </Element>
       </div>
    );
};

export default Home;