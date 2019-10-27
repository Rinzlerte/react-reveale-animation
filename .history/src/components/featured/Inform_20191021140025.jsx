import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const Inform = () => {
    return (
        <div style={{width: `100%`, height :`100vh`, backgroundColor: `red`}}>
            <h1>Inform Page</h1>
            <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
        </div>
    );
};

export default Inform;