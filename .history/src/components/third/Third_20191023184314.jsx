import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{width :`100%`,height: `${window.innerHeight}px`, backgroundColor:`yellow`}} onWheel={(event) => this.handleEvent(event)}>
                <Slide>
                    <div className="container"></div>
                </Slide>
            </div>
        )
    }
}
