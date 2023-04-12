import React from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_PROPERTY } from '../utils/mutations';
import Auth from '../utils/auth';
import { removePropertyId } from '../utils/localStorage';

import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FavoriteButton from '../components/FavoriteButton';

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
  console.log(userData);
  const [removeProperty] = useMutation(REMOVE_PROPERTY);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleRemoveProperty = async (propertyId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { users } = await removeProperty({
        variables: { propertyId: propertyId },
      });

      userData = users;
      removePropertyId(propertyId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
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
                      <Avatar  sx={{ bgcolor: red[500] }} aria-label="Home">
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
                    < FavoriteButton/>
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
                      <br />
                      <Button variant='contained' onClick={() => handleRemoveProperty(property.propertyId)}>
                        Delete this Property!
                      </Button>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SavedProperties;

