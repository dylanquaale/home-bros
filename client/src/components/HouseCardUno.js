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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { stringifyForDisplay } from '@apollo/client/utilities';

const { faker } = require("@faker-js/faker");

const generateFakeProperty = () => {
  return {
    propertyId: faker.datatype.uuid(),
    subheader: faker.date.between('1950-01-01T00:00:00.000Z', '2023-04-1701T00:00:00.000Z'),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipcode: faker.address.zipCode(),
    price: faker.datatype.number({ min: 100000, max: 1000000 }),
    price: faker.finance.amount(100000, 1000000, 2),
    bedrooms: faker.datatype.number({ min: 1, max: 5 }),
    bathrooms: faker.datatype.number({ min: 1, max: 5 }),
    squareFeet: faker.datatype.number({ min: 1000, max: 5000 }),
    image: faker.image.imageUrl(640, 480, 'realestate', true, true),
  };
};


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

function generateRandomHouseDescription() {
  const adjective = faker.commerce.productAdjective();
  const material = faker.commerce.productMaterial();
  const rooms = faker.random.number({ min: 2, max: 5 });
  const bathrooms = faker.random.number({ min: 1, max: 4 });

  return `This ${adjective} ${material} house has ${rooms} bedrooms and ${bathrooms} bathrooms.`;
}

export default function HomeReviewCardUno() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const properties = [];

  for (let i = 0; i < 1; i++) {
    properties.push(generateFakeProperty());
  }


  
  return (
    <div>
      {properties.map((property) => (
      <Card key={property.propertyId} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Home">
              H
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={property.address}
          subheader= {property.subheader.toLocaleDateString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={faker.image.imageUrl(200, 300
            
            
            , 'realestate', true, true)}
          // image = "https://source.unsplash.com/random/200x300?real-estate"
          alt="faker.address.streetAddress()"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* {generateRandomHouseDescription()} */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      ))}
    </div>
  );
}

