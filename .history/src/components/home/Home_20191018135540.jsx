import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';
import Carrousel from './carusel/Carrousel';
// <Header />
// <AroowBtn width="60px" height="60px" />
const Home = () => {
    return (
        <div nclassName="container" style={{ position: 'relative' }}>
            <Carrousel />
        </div>
    );
};

export default Home;