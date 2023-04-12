//idk how to refactor this in with the new code

import * as React from 'react';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
const { QUERY_PROPERTIES } = require('../utils/queries');
const { useQuery } = require('@apollo/client');


// const PEXELS_API_KEY = 'dTxSFdIsdAJk7qP6gPugs1z5ftld7yXjc9AoOiQVScGERh4YmLl3skpP';

// export default function SimpleContainer() {
//     const [images, setImages] = React.useState([]);

//     React.useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await axios.get('https://api.pexels.com/v1/search', {
//             headers: {
//               Authorization: PEXELS_API_KEY,
//             },
//             params: {
//               query: 'house',
//               per_page: 6,
//             },
//           });

//           setImages(response.data.photos);
//         } catch (error) {
//           console.error('Error fetching images:', error);
//         }
//       };

//       fetchImages();
//     }, []);

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Grid container spacing={3}>
//           {images.map((image, index) => (
//             <Grid key={index} item xs={12} sm={6} md={4}>
//               <HomeReviewCardUno imageUrl={image.src.medium} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }

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

export default function PropertyCard() {
  const { loading, data } = useQuery(QUERY_PROPERTIES);
  const propertylist = data?.properties || [];
  console.log(propertylist);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header variant="h1" align="center" >Listings Currently Available</Header>
        <Grid container spacing={3}>
          {propertylist.map((property, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500], color: 'white'}} aria-label="Home">
                      H
                    </Avatar>
                  }
                  title={property.address}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={property.image}
                  alt="faker.address.streetAddress()"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary"></Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                  </IconButton>
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
                    <Typography paragraph>
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
    </React.Fragment>
  );
}