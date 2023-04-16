import React from "react"; // import React
import Typography from '@mui/material/Typography'; // import Typography from @mui/material/Typography
import Container from '@mui/material/Container'; // import Container from @mui/material/Container
import { useQuery } from '@apollo/client'; // import { useQuery } from @apollo/client
import { QUERY_ME } from '../utils/queries'; // import { QUERY_ME } query
import { styled } from "@mui/material/styles"; // import { styled } from @mui/material/styles

// DisplayUserDataStyle styles the container that will display the user's data
const DisplayUserDataStyle = styled(Container)(({ theme }) => ({
    marginTop: '5%',
      color: theme.palette.common.black,
  fontFamily: 'Trebuchet MS',
  display: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

// DisplayUserData component that returns the user's username and email from the database
export default function DisplayUserData() {
    const { data } = useQuery(QUERY_ME);
    const { username, email } = data.me;

    return (
        <DisplayUserDataStyle>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Current Username:
                    <br /> {username}
                </Typography>
            <br />
            <Typography component="h1" variant="h5">
                Current Email:
                <br /> {email}
            </Typography>
            </Container >
        </DisplayUserDataStyle>
    );
};