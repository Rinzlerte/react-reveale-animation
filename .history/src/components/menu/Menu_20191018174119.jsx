import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
        </div>
    );
};

export default Menu;