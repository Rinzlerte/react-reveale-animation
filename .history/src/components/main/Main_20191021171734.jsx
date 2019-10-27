import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';
import Wellcome from './Wellcome';
import Inform from './Inform';
import { CrossBtn} from '../ui/Crossbtn';
import Secondary from '../secondary/Secondary';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            secondary: false,
		}
		this.toogle = this.toogle.bind(this);
      }

	toogle(){
		this.setState({
			secondary: !this.state.secondary,
		})
	}

	handleEvent = (event) =>{
  	var y = event.deltaY;
  	if (y > 0) {
    this.setState({
		secondary : true
	})
  	} else {
		this.setState({
			secondary : false
		})
  	}
}	
	

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
				<div className="container" style={{display:`flex`, height:`${window.innerHeight}px`}}>
					<Slide left>
						<div className="about-box">
							<CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
						</div>
					</Slide>
					<Slide right>
						<div className="intro">
							<Wellcome />
							<Inform />
						</div>
					</Slide>
				</div>
				{
					this.state.secondary?
					<Secondary params={this.state.params}/>
					:null
				}
				<div className="footer" onClick={this.toogle}>
				    <ArrowBtn 
						width="56px" height="56px" link="false" linkTo="#"
				    />
				</div>
            </div>
        );
    }
}
