import React from 'react';
import Carousel from 're-carousel';




// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {


    return (
        <Carousel auto >
            <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
            <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
        </Carousel>
    );
};

export default Home;