import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
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
            <div className="inform-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Roll top when={this.state.show}>
                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform"/>
                </Roll>
            </div>
        )
    }
}
