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
            <figure className="connetcion-box box">
                <img src="https://images.wallpaperscraft.ru/image/mokryj_kapli_bliki_149805_2160x3840.jpg" alt="Connections"/>
                <figcaption>
                    <h2>I think <span>nighttime</span> is dark</h2>
                    <p>So you can imagine your fears with less distraction.</p>
                </figcaption>		
            </figure>
        );
    }
}
