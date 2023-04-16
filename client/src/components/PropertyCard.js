import React, { useEffect, useState } from 'react'; // import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles'; // import { styled }
import Card from '@mui/material/Card'; // import Card
import CardHeader from '@mui/material/CardHeader'; // import CardHeader
import CardMedia from '@mui/material/CardMedia'; // import CardMedia
import CardContent from '@mui/material/CardContent'; // import CardContent
import CardActions from '@mui/material/CardActions'; // import CardActions
import Collapse from '@mui/material/Collapse'; // import Collapse
import Avatar from '@mui/material/Avatar'; // import Avatar
import IconButton from '@mui/material/IconButton'; // import IconButton
import Typography from '@mui/material/Typography'; // import Typography
import { red } from '@mui/material/colors'; // import { red }
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // import ExpandMoreIcon
import Container from '@mui/material/Container'; // import Container
import Grid from '@mui/material/Grid'; // import Grid
import axios from 'axios'; // import axios for API calls
import { PEXELS_API_KEY } from '../config'; // import PEXELS_API_KEY from config
import FavoriteButton from '../components/FavoriteButton'; // import FavoriteButton
const { QUERY_PROPERTIES } = require('../utils/queries'); // import { QUERY_PROPERTIES } query
const { useQuery } = require('@apollo/client'); // import { useQuery } from @apollo/client
 
// Header styles the header that will display the text "Properties"
const Header = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
`;

// ExpandMore styles the expand button that will be used to expand the card to display more information
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// PropertyCard component that returns the property's address, image, and description from the database and displays it in a card
function PropertyCard() {
  const { loading, data } = useQuery(QUERY_PROPERTIES);
  const propertylist = data?.properties || [];
  
  const [expanded, setExpanded] = React.useState(false);
  const [images, setImages] = useState([]);
//uses Pexels api for images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
          params: {
            query: 'house',
            per_page: 6,
          },
        });

        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
//expands property card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }
// returns page content
  return (
    <>
      <Container maxWidth="lg">
        <Header variant="h1" align="center" >Listings Currently Available</Header>
        <Grid container spacing={3}>
          {propertylist.map((property, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500], color: 'white' }} aria-label="Home">
                      H
                    </Avatar>
                  }
                  title={property.address}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={property.image || images[i]?.src.medium}
                  alt="House"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary"></Typography>
                </CardContent>
                <CardActions disableSpacing>
                < FavoriteButton
                property={property} />
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Property Info:</Typography>
                    <Typography paragraph>
                      {property.address}
                      <br />
                      {property.city},
                      {property.state}
                      <br />
                      {property.zipcode}
                      <br />
                      Price: ${property.price}
                      <br />
                      Bedrooms: {property.bedrooms}
                      <br />
                      Bathrooms: {property.bathrooms}
                      <br />
                      Sqft: {property.squareFeet}
                    </Typography>
                    <Typography>
                      Additional Property Description
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ >
  );
}

export default PropertyCard;