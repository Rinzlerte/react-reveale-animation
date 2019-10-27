import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container home">
            <div style={{width: `100%` ,height:`${window.innerHeight}px`, position: "absolute"}}>
                <Header />
                <ArrowBtn 
                width="56px" height="56px" link="true" linkTo="/"
                />
            </div>
            <MainSlider />
       </div>
    );
};

export default Home;