import React from 'react'
import Card from '@material-ui/core/Card'
//import CardActions from '@material-ui/core/CardActions'
import CardCotent from '@material-ui/core/CardContent'
//import CardMedia from '@material-ui/core/CardMedia'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

//functional component
const Person = (props) =>{
    return(
        <div>
            {props.person ?(
                <Card>
                    <CardCotent>
                        <Typography>
                           {props.person.name} 
                        </Typography>
                        <Typography>
                           {props.person.age} 
                        </Typography>
                    </CardCotent>
                </Card>
            ):null}
        </div>
    )
}
export default Person;