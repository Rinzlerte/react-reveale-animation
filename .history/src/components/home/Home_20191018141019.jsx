import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';
import Carrousel from './carusel/Carrousel';

const Home = () => {
    return (
        <div className="container"   style={{ height:`${window.innerHeight}px`}}>
            <Header />
        </div>
    );
};

export default Home;