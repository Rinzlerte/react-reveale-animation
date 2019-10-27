import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import AroowBtn from '../ui/Icon';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container">
            <Header />
            <MainSlider />
            
       </div>
    );
};

export default Home;