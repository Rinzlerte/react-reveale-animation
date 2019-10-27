import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';

const Home = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Header />
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/"
                />
            <MainSlider />
       </div>
    );
};

export default Home;