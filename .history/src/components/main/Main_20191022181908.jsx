import React from 'react';

import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import Information from './Information';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {ArrowBtn} from '../ui/ArrowBtn';


import Secondary from '../secondary/Secondary';

import './Main.css';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state = { show: false };
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	handleEvent = (event) =>{
		var y = event.deltaY;
		if (y > 0) {
			console.log("scroll down");
			this.setState({ show: !this.state.show });
		} else {
			console.log("scroll up");
			this.setState({
				// secondary : false,
			})
		}
	}	

	toogleSecondary = (value) => {
		console.log(value);
		this.setState({ show: value });
	}
	
    render(){
        return (
				<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
					<div className="container" style={{display:`flex`, height:`${window.innerHeight}px`}}>
						<Slide left>
							<div className="about-wrapper">
								<AboutBox />
							</div>
						</Slide>
						<Slide right>
							<div className="intro">
								<Wellcome />
								<Information />
							</div>
						</Slide>
					</div>
					<Fade bottom when={this.state.secondaryShown}>
						<Secondary />
				  	</Fade>
					<div className="footer" onClick={(e)=>this.toogleSecondary(true)}>
						<ArrowBtn 
							width="56px" height="56px" 
						/>
					</div>
				</div>
        );
    }
}
