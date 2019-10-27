import React from 'react';
import { CrossBtn} from '../ui/CrossBtn';

const Informaton = () => (
            <div className="inform-box">
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
            </div>
    );

export default Informaton;



import React, { Component } from 'react'

export default class Information extends Component {

    constructor(props) {
        super(props)
        this.state = {
          opacity: 0
        }
      }
      
      mouseEnter() {
          console.log('mouse enter')
          this.setState({opacity: 0.5})
      }
      
      mouseLeave() {
          console.log('mouse leave')
          this.setState({opacity: 1})
      }
      
          render() {
            <div style={{opacity: this.state.opacity}}>
              <img src={src} onMouseEnter={::this.mouseEnter} onMouseLeave={::this.mouseLeave} />
            </div>
          }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
