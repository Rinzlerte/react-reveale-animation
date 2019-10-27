import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { CrossBtn} from '../ui/Crossbtn';
import './Secondary.css';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state={
            show : false
        }
      //  this.state = { show: this.props.show };
        // this.handleClick = this.handleClick.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
      }

      componentDidMount(){
        this.setState({ show: !this.state.show });
      }
      handleEvent = (event) =>{
        var y = event.deltaY;
        if (y > 0) {
      this.setState({
      })
        } else {
            this.setState({
                show: !this.state.show
            })
        }
    }	


    render() {
        return (
            <div className="secondary" style={{display:`flex`, height:`${window.innerHeight}px`, position: `absulute`, zIndex: `1`}}>
                <Slide left when={this.state.show}>
                    <div className="connections">
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
                    </div>
                </Slide>
                <div className="secondary-box">
                    <Slide top collapse when={this.state.show}>
                        <div className="box" style={{backgroundColor: `grey`}}></div>
                    </Slide>
                    <Slide right collapse when={this.state.show}>
                        <div className="box" style={{backgroundColor: `orange`}}></div>
                    </Slide>
                </div>
            </div>
        );
    }
}
