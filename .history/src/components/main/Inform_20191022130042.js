import React, { Component } from 'react';
import { CrossBtn} from '../ui/Crossbtn';

export default class Inform extends Component {
    constructor() {
        this.state = {
          opacity: 1
        }
      }



    render() {
        return (
            <Inform className="inform-box" >
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" style={{opacity: this.state.opacity}}/>
            </Inform>
        )
    }
}
