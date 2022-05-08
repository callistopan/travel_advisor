import React from "react";
import {Box,Typography,Button,Card,CardContent,CardMedia,CardActions,Chip} from "@material-ui/core";
import LocationOnIcon   from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'
const PlaceDetails=({place})=>{
    console.log(place)
    const classes=  useStyles();
    return (
       <Card elevation={6}>
           <CardMedia
                style={{height:350}}     
                image={place.photo}   
                title={place.name}
           
           />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">{place.name}</Typography>

            </CardContent>



       </Card>
        
    )
}

export default PlaceDetails;