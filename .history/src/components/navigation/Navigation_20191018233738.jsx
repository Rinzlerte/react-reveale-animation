import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () =>  (
    <div className="menu"  style={{ height:`${window.innerHeight}px`}}>

        <div className="menu-box">
            <Link className="menu-box-link" to="/">Home</Link>
            <Link className="menu-box-link" to="/about">About</Link>
            <Link className="menu-box-link" to="/proects">Dashboard</Link>
            <Link className="menu-box-link" to="/contacts">Contacts</Link>
        </div>
    </div>
);

export default Navigation;