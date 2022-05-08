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
                image={place.photo? place.photo.images.large.url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dineout.co.in%2Flucknow%2Fcafe-by-default-hazratganj-central-lucknow-53930%2Fphotos&psig=AOvVaw1LZ8i6RPt3f_6eAL5fbHGz&ust=1652096402138000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjM0e3oz_cCFQAAAAAdAAAAABAD'}   
                title={place.name}
           
           />
              <CardContent>
                  <Typography gutterBottom variant="h5" >{place.name}</Typography>
                  <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottum variant="subtitle1">{place.price_level}</Typography>

                  </Box>
                  <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottum variant="subtitle1">{place.ranking}</Typography>

                  </Box>
                  

            </CardContent>



       </Card>
        
    )
}

export default PlaceDetails;