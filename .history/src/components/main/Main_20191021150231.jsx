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
		alert('fdffdfddf');
		this.setState({
			secondaryNotShown: false
		})
	}

	handleEvent = (event) => {
		console.log(event);
		// if (event.type === "mousedown") {
		// 	   alert('MOUSE DOWN')
		//    } else {
		// 	   alert ('Mouse UP')
		//    }
	   }

	

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={this.handleEvent}>
			{ this.state.secondaryNotShown?
				<div className="container">
				<Slide left>
					<div className="about">
						<CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
					</div>
				</Slide>
				<Slide right>
					<div clasName="intro" style={{width:`50%`, backgroundColor:`green`}}>
						<Wellcome 
						/>
						<Inform />
					</div>
				</Slide>
				</div>
				
			: <div className="container">
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
