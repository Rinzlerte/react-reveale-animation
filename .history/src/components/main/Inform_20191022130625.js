import React, { Component } from 'react';
import { CrossBtn} from '../ui/Crossbtn';

export default class Inform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          opacity: 0
        }
        this.mouseEnter= this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
      }

    mouseEnter() {
        console.log('mouse enter')
        this.setState({opacity: 1});
    }
    
    mouseLeave() {
        console.log('mouse leave')
        this.setState({opacity: 1});
    }

    render() {
        return (
            <Inform className="inform-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" style={{opacity: this.state.opacity}}/>
            </Inform>
        )
    }
}
