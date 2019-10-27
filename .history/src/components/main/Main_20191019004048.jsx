import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';

const Main = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
           
            <div className="footer">
                <ArrowBtn 
                        width="56px" height="56px" link="true" linkTo="/"
                />
            </div>
       </div>
    );
};

export default Main;