import React from 'react';
import MainSlider from './Featured';


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