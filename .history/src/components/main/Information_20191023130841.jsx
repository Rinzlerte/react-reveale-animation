import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import {CrossBtn} from '../ui/CrossBtn';

export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
      }
      
    mouseEnter() {
        this.setState({show: true})
    }
      
    mouseLeave() {
        this.setState({
            show: false
        })
    }
      
    render() {
        return (
            <div className="inform-box box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Fade when={this.state.show}>
                    <Spin top when={this.state.show}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform"/>
                    </Spin>
                </Fade>
            </div>
        )
    }
}
