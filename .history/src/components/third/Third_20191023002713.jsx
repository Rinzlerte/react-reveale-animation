import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import './Third.css';

export default class Third extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            secondaryCounter : 0,
            global: true,
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    render() {
        return (
            <div className="third">
                <div></div>
                <div></div>
            </div>
        )
    }
}
