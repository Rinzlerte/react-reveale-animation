import React from 'react';
import {Element} from 'react-scroll';
import {ArrowBtn} from '../ui/ArrowBtn';

import Intro from './intro/Intro';
import Main from './main/Main';

const Home = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Element name="tohome">
                <Intro />
            </Element>
            <Element name="tomain">
                <Main />
            </Element>
       </div>
    );
};

export default Home;