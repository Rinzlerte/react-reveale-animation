import React from 'react';
import {Element, scroller} from 'react-scroll';
import {ArrowBtn} from '../ui/ArrowBtn';

import Intro from './intro/Intro';
import Main from './main/Main';

const Home = () => {
    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration : 1500,
            delay: 100,
            smoth: true,
            offset: -100
        });
    }

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