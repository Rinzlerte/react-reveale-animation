import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container">
            <div style={{width: `100%` ,height:`${window.innerHeight}px`, position: "absolute", display:`flex`, justifyContent:`column`, alignItems:`center`, flexDirection:`column`}}>
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