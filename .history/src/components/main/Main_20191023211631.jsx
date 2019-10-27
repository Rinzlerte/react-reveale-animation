import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
// import {BackBtn} from '../ui/BackBtn';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
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
			secondaryIsShown: false,
			third : false
		}
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	// closeSecondary(){
	// 	this.setState({
	// 		secondary: false
	// 	});
	// }

	handleEvent = (event) =>{
		var y = event.deltaY;
		if (y > 0) {
			console.log("scroll down in main");
			this.setState({
				count : this.state.count + 1,
				secondaryIsShown: true
			});
		}
		
		else if (y < 0){
			if (this.state.counter === 0){
				return;
			}else {
				console.log("scroll up in main");
				this.setState({
					count : this.state.count - 1
				});
			}
		} 
		console.log("actual counter", this.state.counter);
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
					<div className="container" style={{display:`flex`, height:`${window.innerHeight}px`, position:`releative`}}>
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
						<Fade bottom when={this.state.secondaryIsShown}>
							<div className="container" style={{position:`absolute`, display:`flex`}}>
								<Slide top>
									<div className="connections">
										<ConnectionsBox />
									</div>
								</Slide>
								<div className="side-wrapper">
									<Slide right >
											<div className="item">
												<EnterBox />
											</div>
									</Slide>
									<Slide bottom>
										<div className="item">
											<InnovateBox />
										</div>
									</Slide>
								</div>
							</div>
						</Fade>
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
// %
// 						<div className="side-wrapper" style={{position: `absolute`}}>
// 							<Slide right when={this.state.show}>
// 								<div className="item">
// 									<EnterBox />
// 								</div>
// 							</Slide>
// 							<Slide bottom  when={this.state.show}>
// 								<div className="item">
// 									<InnovateBox />
//                         		</div>
//                     		</Slide>
// 						</div>