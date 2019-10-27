import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () =>  (
        <div className="menu"  style={{ height:`${window.innerHeight}px`}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard">Contacts</Link>
        </div>
);

export default Menu;