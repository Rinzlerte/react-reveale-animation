import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import {BackBtn} from '../ui/BackBtn';
import Slide from 'react-reveal/Slide';
import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import Information from './Information';
import Secondary from '../secondary/Secondary';

import './Main.css';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
			main: false,
			count : 0,
			secondary: false,
		}
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	handleEvent = (event) =>{
		var y = event.deltaY;
		if (y > 0) {
			console.log("scroll down");
		this.setState({
			secondary : true,
		});
		} else {
			console.log("scroll up");
			this.setState({
				// secondary : false,
			})
		}
	}	

	toogleSecondary = (value) => {
		console.log(value);
		this.setState({
			secondary : value
		});
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
					{	this.state.secondary?
						<Secondary />
						:null
					}
					<div className="footer" onClick={(e)=>this.toogleSecondary(true)}>
						<ArrowBtn 
							width="56px" height="56px" 
						/>
					</div>
				</div>
        );
    }
}
