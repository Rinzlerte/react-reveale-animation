import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container">
            <Header />
            <MainSlider />
            <ArrowBtn 
                width="70px" height="70px" link="true" linkTo="/"
            />
       </div>
    );
};

export default Home;