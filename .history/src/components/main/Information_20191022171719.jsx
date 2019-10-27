import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import {CrossBtn} from '../ui/CrossBtn';

export default class Information extends Component {

    constructor(props) {
        super(props)
        this.state = {
          opacity: 0
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
      }
      
    mouseEnter() {
        console.log('mouse enter')
        this.setState({opacity: 1})
    }
      
    mouseLeave() {
        console.log('mouse leave')
        this.setState({
            opacity: 0
        })
    }
      
    render() {
        return (
            <div className="inform-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Roll Roll top when={this.state.show}>
                    <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" opacity={this.state.opacity}/>
                </Roll>
            </div>
        )
    }
}
