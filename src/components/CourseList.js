import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

class CourseList extends Component{
    state = {
        courses:[],
        searchString:''
    }

    constructor(){
        super()
        this.getCourses()
    }

    getCourses = () =>{
        
    }
}