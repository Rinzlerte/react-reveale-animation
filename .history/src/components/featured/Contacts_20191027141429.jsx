import React from 'react';

// import image1 from '../../Resources/images/logos/uploads.png';
// import image2 from '../../Resources/images/logos/wallking.png';



const Contacts = (props) => {
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`, display:`flex`}} onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
        <h1>{props.title}</h1>
    </div>
    );
};

export default Contacts;