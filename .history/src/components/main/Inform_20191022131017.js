import React, { Component } from 'react';
import { CrossBtn } from '../ui/Crossbtn';

export default class Inform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          opacity: 0
        }
      
      }



    // style={{opacity: this.state.opacity}}
    render() {
        return (
            <Inform className="inform-box" >
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
            </Inform>
        )
    }
}
