import React, { Component } from 'react';
import { CrossBtn} from '../ui/Crossbtn';

export default class Inform extends Component {
    constructor() {
        this.state = {
          opacity: 1
        }
      }

      mouseEnter() {
        console.log('mouse enter')
        this.setState({opacity: 0.5})
    }
    
    mouseLeave() {
        console.log('mouse leave')
        this.setState({opacity: 1})
    

    render() {
        return (
            <Inform className="inform-box" onMouseEnter={::this.mouseEnter} onMouseLeave={::this.mouseLeave}>
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" style={{opacity: this.state.opacity}}/>
            </Inform>
        )
    }
}
