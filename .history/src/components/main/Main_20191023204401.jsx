import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
// import {BackBtn} from '../ui/BackBtn';
import Slide from 'react-reveal/Slide';
import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import Information from './Information';


// test
import ConnectionsBox from '../secondary/ConnectionsBox';
import InnovateBox from '../secondary/InnovateBox';
import EnterBox from '../secondary/EnterBox';


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
			
			console.log("scroll down in main");
			this.setState({
				count : this.state.count + 1
			});
		}
		
		else if (y < 0){
			if (this.state.count === 0){
				return;
			} else {

				console.log("scroll up in main");
				this.setState({
					count : this.state.count - 1
				});
			} 
		}
	}	


	componentDidMount(){
		console.log('main is loaded', this.state.count);
	}

	toogleSecondary = (value) => {
		console.log(value);
		this.setState({
			secondary : value
		});
	}
	

	// renderSecondary(){
	// 	if (this.state.count === 1) {
    //         return <Secondary />;
	// 	}
	// 	if (this.state.count === 3) {
	// 		return <Third />
	// 	}
	// }

    render(){
        return (
				<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
					<div className="container" style={{display:`flex`, height:`${window.innerHeight}px`}}>
						<Slide left>
							<div className="side-wrapper">
								<AboutBox />
							</div>
						</Slide>
						<div className="side-wrapper">

							<Wellcome />

							<Slide right>
								<div className="item">
									<Information />
								</div>
							</Slide>
						</div>
					</div>
					{this.state.secondaryIsShown?
						<div className="side-wrapper" style={{position: `absolute`}}>

						
						</div> %
						<div className="side-wrapper" style={{position: `absolute`}}>

						
						</div>
						:null
					}
					<div className="footer">
						<ArrowBtn 
							width="56px" height="56px" 
						/>
					</div>
				</div>
        );
    }
}
