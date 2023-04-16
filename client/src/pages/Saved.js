import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {
  Grid,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  // CssBaseline,
  Container,
  Card,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteButton from '../components/DeleteButton';

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

const SavedProperties = () => {
  const { loading, data } = useQuery(QUERY_ME);
  let userData = data?.me || [];
  const [expanded, setExpanded] = React.useState(false);
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
        <Header className="pt-5">
          {userData.savedProperties.length
            ? `Viewing ${userData.savedProperties.length} saved ${userData.savedProperties.length === 1 ? 'property' : 'properties'}:`
            : 'You have no saved properties!'}
        </Header>
        <Grid container spacing={3}>
          {userData.savedProperties.map((property) => {
            return (
              <Grid key={property.propertyId} item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="Home">
                      </Avatar>
                    }
                    title={property.address}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={property.image}
                    alt="faker.address.streetAddress()" />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary"></Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <FavoriteIcon sx={{ color: red[500] }} />
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more">
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
                      <br />
                      <DeleteButton property={property} />
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ >
  );
};

export default SavedProperties;

