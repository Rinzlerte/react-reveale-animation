import React, { Component } from 'react';
import Promoslider from './Promoslider';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';

export default class Home extends Component {
    render() {
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Header />
            <Promoslider />
            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/main"
                />
            </div>
       </div>
        )
    }
}
