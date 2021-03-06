import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';
import Wellcome from './Wellcome';
import Inform from './Inform';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            checked: false,
            setChecked: false
        }
      }

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
				<div className="container">
					<Slide left>
						<div style={{width:`50%`, backgroundColor:`yellow`}}><h3>Реєстрація до 16го Жовтня</h3></div>
					</Slide>
					<Slide right>
						<div clasName="intro" style={{width:`50%`, backgroundColor:`white`}}>
							<div style={{width:`100%`, height:`50%`, position: `relative`}}>
								<h1>Welcome Guys!</h1>
								<h2>Congatulations!</h2>
							</div>
							<Inform />
						</div>
					</Slide>
				</div>
				<div className="footer">
				    <ArrowBtn 
				        width="56px" height="56px" link="true" linkTo="/"
				    />
				</div>
            </div>
        );
    }
}
