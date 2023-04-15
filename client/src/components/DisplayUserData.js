import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { styled } from "@mui/material/styles";

const DisplayUserDataStyle = styled(Container)(({ theme }) => ({
    marginTop: '5%',
      color: theme.palette.common.black,
  fontFamily: 'Trebuchet MS',
  display: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

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