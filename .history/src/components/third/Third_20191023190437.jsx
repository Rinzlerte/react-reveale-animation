import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import ImamaginationBox from './ImmaginationBox';

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{width :`100%`,height: `${window.innerHeight}px`, backgroundColor:`yellow`}}>
                <Slide right>
                    <div className="container" style={{display:`flex`}}>
                        <div className="side-wrapper">
                            <Fade right>
                                <ImamaginationBox/>
                            </Fade>
                        </div>
                        <div className="side-wrapper"></div>
                    </div>
                </Slide>
            </div>
        );
    }
}
