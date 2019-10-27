import React from 'react';



// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`}} >
            <Header />
            <div style={{ position: 'relative' }}>
                <Carrousel />
            </div>
            <AroowBtn />
        </div>
    );
};

export default Home;