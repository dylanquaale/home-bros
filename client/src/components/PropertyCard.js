import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { PEXELS_API_KEY } from '../config';

import FavoriteButton from '../components/FavoriteButton';
const { QUERY_PROPERTIES } = require('../utils/queries');
const { useQuery } = require('@apollo/client');

const Header = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
`;

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

function PropertyCard() {
  const { loading, data } = useQuery(QUERY_PROPERTIES);
  const propertylist = data?.properties || [];
  console.log(propertylist);
  const [expanded, setExpanded] = React.useState(false);
  const [images, setImages] = useState([]);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      {/* <CssBaseline /> */}
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