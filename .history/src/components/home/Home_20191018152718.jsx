import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import ArowBtn from '../ui/Icon';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container">
            <Header />
            <MainSlider />
            <ArowBtn />
       </div>
    );
};

export default Home;