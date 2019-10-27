import React from 'react';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

const Home = () => {
    const text = 'copiright 2019'
    return (
        <home style={{width: "100%", height: "100vh"}} className="home">
            <Header />
            <Footer info={text}/>
        </home>
    );
};

export default Home;