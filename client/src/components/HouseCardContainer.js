// IMPORTANT USE LINE 30 AND MAKE A FUNCTION THAT RETURNS THE DATA 

import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import HomeReviewCardUno from './PropertyCard';
// import generateFakeProperty from './HouseCardUno';
// import { useQuery } from '@apollo/client';
// import { QUERY_PROPERTIES } from '../utils/queries';

// make a function that returns this data

export default function SimpleContainer() {
    // const { loading, data } = useQuery(QUERY_PROPERTIES);
  
    // if (loading) return <p>Loading...</p>;       
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* {data.properties.map(({ _id, address, bathrooms, bedrooms, city, image, price, squareFeet, state, zipcode }) => (
              <Grid key={_id} item xs={12} sm={6} md={4}> */}
                {<HomeReviewCardUno />}
                  {/* address={address}
                  bathrooms={bathrooms}
                  bedrooms={bedrooms}
                  city={city}
                  image={image}
                  price={price}
                  squareFeet={squareFeet}
                  state={state}
                  zipcode={zipcode} */}
                {/* /> */}
              {/* </Grid> */}
            {/* ))} */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }


{/* <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </Container>
</React.Fragment> */}
