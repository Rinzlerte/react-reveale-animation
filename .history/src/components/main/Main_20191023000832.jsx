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
			third : false
		}
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	closeSecondary(){
		this.setState({
			secondary: false
		});
	}

	handleEvent = (event) =>{
		var y = event.deltaY;
		if (y > 0) {
			this.setState({
				count : this.state.count + 1
			});
			console.log("scroll down in main", this.state.count);
		} else if (y < 0){
			this.setState({
				count : this.state.count - 1
			});
			console.log("scroll up in main", this.state.count );
		} else if (this.state.count === -1){
			setTimeout(this.closeSecondary, 1000);
		} else if (this.state.count === 3){
			this.setState({
				// secondary : false,
				count : this.state.count + 1
			});
		} else if (this.state.count === 1){
			this.setState({
				secondary : true,
			});
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
