import React, { Component } from 'react';
import {CrossBtn} from '../ui/CrossBtn';

export default class ConnectionsBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false 
        };
        // this.mouseEnter = this.mouseEnter.bind(this);
        // this.mouseLeave = this.mouseLeave.bind(this);
    }
      
    // mouseEnter() {
    //     this.setState({show: true})
    // }
      
    // mouseLeave() {
    //     this.setState({
    //         show: false
    //     })
    // }
    // onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}

    render() {
        return (
            <div className="connetcion-box box">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample41.jpg" alt="sample41"/>
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
            </div>
        );
    }
}
