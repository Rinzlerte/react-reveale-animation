import React from 'react';
import Carousel from 're-carousel';


// widgets={[IndicatorDots, Buttons]}

// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
        <Carousel loop="true" axis="x" interval="100" duration="100" widgets>
            <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
            <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
        </Carousel>
    );
};

export default Home;