import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';
import Carrousel from './carusel/Carrousel';

const Home = () => {
    return (
        <div className="container" style={{position: 'relative', height:`${window.innerHeight}px`}} >
            <Carrousel />
        </div>
    );
};

export default Home;