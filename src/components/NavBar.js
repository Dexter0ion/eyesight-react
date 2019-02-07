
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class NavBar extends Component{
    state = {
        persons: [],
        searchString:''
    }

    onSearchInputCHange = (event) => {
        if(event.target.value){
            this.setState({searchString:event.target.value})
        }
        else{
            this.setState({searchString:''})
        }
        //this.getPersen()
    }
    render() {
    return (

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React-Eyesight
                    </Typography>

                </Toolbar>
            </AppBar>

    )
    }
}

export default NavBar;