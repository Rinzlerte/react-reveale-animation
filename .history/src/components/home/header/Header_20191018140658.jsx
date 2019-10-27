import React, { Component } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import SideDrawler from './SideDrawler';

class Header extends Component {

    state = {
        drawerOpen : false,
        headerOpacity: false
    }

    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // handleScroll =()=> {
    //     if (window.scrollY > 0){
    //         this.setState({
    //             headerOpacity: true
    //         })
    //     }else {
    //         this.setState({
    //             headerOpacity: false
    //         })
    //     }
    // }

    // toogleDrawer = (value) => {
    //     this.setState({
    //         drawerOpen : value
    //     });
    // }

    render() {
        return (
            <Appbar
            position="fixed"
            style={{
                backgroundColor: this.state.headerOpacity? '#FF0000': 'transparent',
                boxShadow: 'none',
                padding: '10px 0px',
                border: '1px solid black',
                width: '100%'
            }}
            >
                <Toolbar>
                    <div className="header_logo">
                        LOGO
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                    >
                       
                    </IconButton>
                    
                </Toolbar>
            </Appbar>
        )
    }
}
export default Header;