import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';
import {CrossBtn} from '../ui/CrossBtn';

export default class Information extends Component {

    constructor(props) {
        super(props);
        this.state = { show: false };

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
      }
      
    mouseEnter() {
        console.log('mouse enter');
        this.setState({show: true})
    }
      
    mouseLeave() {
        console.log('mouse leave');
        this.setState({
            show: false
        })
    }
      
    render() {
        return (
            <div className="inform-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>

            <Flip top when={this.state.show}>
            
            <h1>dfsfsgsgdfgdgdfgdfgdg</h1>
            </Flip>
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" when={this.state.show}/>
            </div>
        )
    }
}
