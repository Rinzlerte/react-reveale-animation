import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';
import Wellcome from './Wellcome';
import Inform from './Inform';
import { CrossBtn} from '../ui/Crossbtn';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            secondaryNotShown: true,
		}
		this.toogle = this.toogle.bind(this);
      }

	toogle(){
		this.setState({
			secondaryNotShown: !this.state.secondaryNotShown,
		})
	}

	handleEvent = (event) =>{
  	var y = event.deltaY;
  	if (y > 0) {
    this.setState({
		secondaryNotShown : false
	})
  	} else {
		this.setState({
			secondaryNotShown : true
		})
  	}
}	
	

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
			{ this.state.secondaryNotShown?
				<div className="container" style={{display:`flex`, height:`${window.innerHeight}px`}}>
					<Slide left>
						<div className="about">
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
				
			: <div className="secondary container" style={{display:`flex`, height:`${window.innerHeight}px`, position: `absulute`, zIndex: `1`}}>
			
			
			</div>
			
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
