import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Person from './Person'
const API = 'http://0.0.0.0:5000/search?query='
const DEFAULT_QUERY = 'test'

class PersonList extends Component {
    state = {
        persons: [],
        searchString:''
    }



    
    getPersen = () =>{
        axios.get(API + DEFAULT_QUERY)
            .then(res => {
                const persons = res.data;
                this.setState({ persons })
            })
            .catch(error => {
                console.log("Error occured while fetching data")
                console.log(error)
            })
    }
    
    componentDidMount() {
        
        //fetch(API + DEFAULT_QUERY)
        axios.get(API + DEFAULT_QUERY)
            .then(res => {
                const persons = res.data;
                this.setState({ persons })
            })
            .catch(error => {
                console.log("Error occured while fetching data")
                console.log(error)
            })

    }
    
    onSearchInputCHange = (event) => {
        if(event.target.value){
            this.setState({searchString:event.target.value})
        }
        else{
            this.setState({searchString:''})
        }
        this.getPersen()
    }
    render() {
        /*
        return(
            <ul>
            {this.state.persons.map((currentPerson,i) =>(
                <li key={i}>
                {currentPerson.name}
                {currentPerson.age}
                </li>
            ))}
            </ul>
        )
        */
        
        return (
            <div>
                {this.state.persons ? (
                    <div>
                    <TextField style={{padding:24}}
                        id="searchInput"
                        placeholder="Search Person"
                        margin = "normal"
                        onChange={this.onSearchInputCHange}/>
                    
                    
                    <Grid container spacing={24} style={{padding:24}}>
                        {this.state.persons.map((currentPerson,i) =>(
                            <Grid item key={i} xs={12} sm={6} lg={4} xl={2}>
                            <Person person={currentPerson} />
                            </Grid>
                        ))}
                    </Grid>
                    
                        
                    </div>
                ) :"No persons found"}
                
            </div>
        )
    }
}

export default PersonList;