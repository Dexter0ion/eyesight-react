import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid'
import ObjectTarget from './ObjectTarget'
const API = 'http://0.0.0.0:5000/search?query='
//const API = 'http://192.168.0.104:5000/search?query='
const DEFAULT_QUERY = 'object'

class ObjectList extends Component {
    state = {
        objects: []
    }

    getObject = () => {
        axios.get(API + DEFAULT_QUERY)
            .then(res => {
                const objects = res.data;
                this.setState({ objects })
            })
            .catch(error => {
                console.log("Error occured while fetching data")
                console.log(error)
            })
    }

    componentDidMount() {
        this.getObject();
    }

    render() {
        return (
            <div>
                {this.state.objects ? (

                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {this.state.objects.map((currentObject, i) => (
                            <Grid item key={i} xs={6} sm={6} lg={4} xl={2}>
                                <ObjectTarget objtarget={currentObject} />
                            </Grid>
                        ))}
                    </Grid>
                ) : "No Objects Found"}
            </div>
        )
    }
}

export default ObjectList;