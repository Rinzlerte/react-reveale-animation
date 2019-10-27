import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';


import Company from './Company'; 
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
//       <div className="footer">
//       <ArrowBtn 
//           width="56px" height="56px" link="true" linkTo="/"
//       />
//   </div>

    render(){
        return (
            <div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
				<Slide right>
					<div><h3>Реєстрація до 16го Жовтня</h3></div>
					
				</Slide>
				<Slide left>
					<div><h3>Info</h3></div>
				</Slide>
            </div>
        );
    }
}
