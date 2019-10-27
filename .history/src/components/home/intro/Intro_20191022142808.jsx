import React from 'react';
import {scroller} from 'react-scroll';
import Promoslider from './intro/Promoslider';
import Header from './intro/Header.jsx/';
import {ArrowBtn} from '../ui/ArrowBtn';


const Intro = () => {
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
            <Header />
            <Promoslider />
            <div className="footer" onClick={() => scrollToElement("main")}>
                <ArrowBtn 
                    width="56px" height="56px" link="false" 
                />
            </div>
       </div>
    );
};

export default Intro;