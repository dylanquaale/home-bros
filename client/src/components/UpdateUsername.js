import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { UPDATE_USER_USERNAME } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Typography,
    Container,
    Box,
    TextField,
    Button,
} from '@mui/material';

export default function UpdateUsername() {
    const { data } = useQuery(QUERY_ME);
    const [userFormData, setUserFormData] = useState({
        username: "",
    });
    const [updateUsername] = useMutation(UPDATE_USER_USERNAME);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userFormData.username) {
                await updateUsername({
                    variables: { username: userFormData.username },
                });
            }
            alert("Username has been Updated!");
        } catch (err) {
            console.error(err);
        }
    };

    const theme = createTheme();

    const { username } = data.me;

    console.log(`username: ${username}`);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Change Username
                    </Typography>
                    <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={handleInputChange}
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Change Username
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};