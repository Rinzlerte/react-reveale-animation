import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{width :`100%`,height: `${window.innerHeight}px`, backgroundColor:`yellow`}}>
                <Slide right>
                    <div className="container" style={{backgroundColor:`red`, display:`flex`}}>
                    <slide right>
                        <div className="side-wrapper" style={{backgroundColor:`green`}}>
                        </div>
                    </slide>
                        <div className="side-wrapper">
                        
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}
