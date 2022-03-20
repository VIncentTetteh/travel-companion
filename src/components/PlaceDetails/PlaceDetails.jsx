import React from 'react'
import { Typography,Box,Button,Card,CardMedia,CardContent,CardActions,Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

export const PlaceDetails = ({place}) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height:350}}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        tittle={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography  gutterBottom variant="subtitle1">{place.price}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography  gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt={award.display_name}/>
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

          <Box my={1} display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Opened</Typography>
              <Typography variant="subtitle2" color="textSecondary">{place.is_closed ? "Opened" : "Closed"}</Typography>
          </Box>

          {
            place?.location_string &&(
              <Typography gutterBottom variant="subtile2" color="textSecondary">
                  <LocationOnIcon /> {place.location_string}
              </Typography>
            )
          }

      
      </CardContent>
    </Card>
  )
}
