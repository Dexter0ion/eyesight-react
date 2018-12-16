import React from 'react'
import Card from '@material-ui/core/Card'
//import CardActions from '@material-ui/core/CardActions'
import CardCotent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

//functional component
const ObjectTarget = (props) => {
    return (
        <div>
            {props.objtarget ? (
                
                <Card>
                    
                    <CardCotent>
                        <CardMedia
                            className={props.objtarget.name}
                                  
                            title="Contemplative Reptile"
                            image= {props.objtarget.img}
                        />
                        <img src={"data:image/jpg;base64," +  props.objtarget.img} />
                        <Typography>
                            {props.objtarget.name}
                        </Typography>
                        <Typography>
                            {props.objtarget.value}
                        </Typography>
                    </CardCotent>
                </Card>
            ) : null}
        </div>
    )
}
export default ObjectTarget;