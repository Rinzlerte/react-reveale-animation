import React, { Component } from 'react'

export default class Wellcome extends Component {
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
            <div className="wellcome-box">
            <div className="wellcome-wrapper">
               <h1>WELLCOME GUYS</h1>
               <p>INTO OUR ANIMATION SITE</p>
            </div>
           </div>
        )
    }
}
