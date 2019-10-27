import React from 'react';

const Contacts = (props) => {
    return (
        <div className="container" style={{ height:`${window.innerHeight}px`, display:`flex`}}>
        <h1>{props.title}</h1>
    </div>
    );
};

export default Contacts;