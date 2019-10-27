import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{ display: `flex`, height: `${window.innerHeight}px`, position: `absulute`, zIndex: `1` }} onWheel={(event) => this.handleEvent(event)}>
                <Slide>
                    <div className="container"></div>
                </Slide>
            </div>
        )
    }
}
