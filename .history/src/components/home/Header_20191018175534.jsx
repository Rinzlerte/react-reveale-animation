import React, { Component } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import {Link} from 'react-router-dom';

class header extends Component {
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
            position="absolute"
            style={{
                backgroundColor: this.state.headerOpacity ? '#FFFFFF': 'transparent',
                boxShadow: 'none',
                padding: '10px 0px',
            }}
            >
                <Toolbar style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div className="header_logo">
                     FANTASTIC SITE
                    </div>
                    <Link to="/menu">
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                    >
                   
                        <MenuIcon
                        
                        />
                    
                        
                    </IconButton>
                    </Link>
                </Toolbar>
            </Appbar>
        )
    }
}
export default header;