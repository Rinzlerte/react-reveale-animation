import React from 'react';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

const Home = () => {
    return (
        <div style={{width: "100%", height: "100vh"}} className="home">
            <Header />
            <Footer/>
        </div>
    );
};

export default Home;