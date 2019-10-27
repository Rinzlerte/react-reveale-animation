import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () =>  (
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>

        <div className="menu-box">
            <Link className="menu-box-link" to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard">Contacts</Link>
        </div>
    </div>
);

export default Navigation;