import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { CrossBtn} from '../ui/Crossbtn';
import './Secondary.css';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state={
            show : false,
            global : true
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
            this.setState({ show: true });
            if (this.state.show){
                this.setState({
                    global : false
                })
            }
        } else {
            this.setState({ show: false });
            console.log('scrolled down');
        }
    }	

    render() {
        return (
            <div>
                { this.state.global?
                    <div className="secondary" style={{display:`flex`, height:`${window.innerHeight}px`, position: `absulute`, zIndex: `1`}} onWheel={(event)=>this.handleEvent(event)}>
                        <Slide left when={this.state.show}>
                            <div className="connections">
                                <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
                            </div>
                        </Slide>
                        <div className="secondary-box">
                            <Slide top when={this.state.show}>
                                <div className="box" style={{backgroundColor: `grey`}}></div>
                            </Slide>
                            <Slide right when={this.state.show}>
                                <div className="box" style={{backgroundColor: `orange`}}></div>
                            </Slide>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}
