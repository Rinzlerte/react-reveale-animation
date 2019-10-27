import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import {CrossBtn} from '../ui/CrossBtn';

export default class ConnectionsBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false 
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
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
            <div className="connetcion-box box" >
                <Fade when={this.state.show}>
                    <Spin top when={this.state.show}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                    </Spin>
                </Fade>
            </div>
        );
    }
}
