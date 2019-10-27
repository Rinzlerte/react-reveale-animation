import React from 'react';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

const Home = () => {
    const text = 'copiright 2019'
    return (
        <div>
            <Header />
            <Footer info={text}/>
        </div>
    );
};

export default Home;