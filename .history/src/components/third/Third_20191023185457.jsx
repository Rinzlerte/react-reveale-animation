import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{width :`100%`,height: `${window.innerHeight}px`, backgroundColor:`yellow`}}>
                <Slide right>
                    <div className="container" style={{backgroundColor:`red`, display:`flex`}}>
                        <div className="side-wrapper">
                            <slide right>
                                <div className="container" style={{backgroundColor:`green`}}></div>
                            </slide>
                        </div>
                        <div className="side-wrapper" style={{backgroundColor:`blue`}}></div>
                    </div>
                </Slide>
            </div>
        );
    }
}
