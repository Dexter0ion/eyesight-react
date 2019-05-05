import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card'

import CardCotent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles';
const API = 'http://94.191.13.184:5000/api/'
//const API = 'http://0.0.0.0:5000/api/'
const DEFAULT_QUERY = 'portrait'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class PortraitTable extends Component{
    state = {
        pdata:[]
    }

    getPData = () =>{
        axios.get(API + DEFAULT_QUERY)
        .then(res => {
            const pdata = Array.from(res.data.plist);
            console.log(pdata)
            console.log(typeof(pdata))
            this.setState({ pdata })
        })
        .catch(error => {
            console.log("Error occured while fetching data")
            console.log(error)
        })
    }

    componentDidMount() {
        this.getPData();
    }

    render(){

        return(
            <div>
                {this.state.pdata.map(p=> (
                <div key={p.name}>
                    <Card>
                    
                    <CardCotent>
                        <CardMedia
                            className={p.name}
                                  
                            title="portrait name"
                            image= {p.data}
                        />
                        <img alt="" src={"data:image/jpg;base64," + p.data} />
                        <Typography>
                            {p.name}
                        </Typography>

                    </CardCotent>
                </Card>
                </div>

                  
                ))}
        </div>
        )
    }
}


export default withStyles(styles)(PortraitTable);

