

export default class AboutBox extends Component {
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
            <div className="about-box box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Fade when={this.state.show}>
                    <Spin top when={this.state.show}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                    </Spin>
                </Fade>
            </div>
        );
    }
}

import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';

import image from '../../Resources/images/architecture-black-and-white.jpg';

const AboutBox = ()=> {
    const [state, setState] = useState(true);
        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                <img src={image} alt="Connections"/>
                <figcaption>
                    <h2>I think <span>secondary</span>= magic</h2>
                    <p>We just like to create WOW effects</p>
                    <Spin top when={!state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
                    </Spin>
                </figcaption>
            </div>
        );
}

export default AboutBox;