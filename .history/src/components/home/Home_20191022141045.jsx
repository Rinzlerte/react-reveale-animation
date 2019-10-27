import React from 'react';
import {scroller} from 'react-scroll';
import Promoslider from './Promoslider';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';

const Home = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Header />
            <Promoslider />
            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/main"
                />
            </div>
       </div>
    );
};

export default Home;