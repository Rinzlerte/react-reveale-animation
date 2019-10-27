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

    handleEvent = (event) => {
        var y = event.deltaY;
        if (y > 0) {
            this.setState({ 
                show: true,
                secondaryCounter : this.state.secondaryCounter + 1,
            });
            console.log("scrolled down in secondary");
        } else if (y < 0) {
            this.setState({ show: false });
            console.log('scrolled up in secondary');
        }
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
