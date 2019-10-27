import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';



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
            </div>
        );
    }
}
