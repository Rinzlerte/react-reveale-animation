import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{width :`100%`,height: `${window.innerHeight}px`, backgroundColor:`yellow`}}>
                <Slide right>
                    <div className="container" style={{display:`flex`}}>
                        <div className="side-wrapper">
                            <Fade right>
                                <div className="container" style={{backgroundColor:`green`}}></div>
                            </Fade>
                        </div>
                        <div className="side-wrapper" style={{backgroundColor:`blue`}}></div>
                    </div>
                </Slide>
            </div>
        );
    }
}
