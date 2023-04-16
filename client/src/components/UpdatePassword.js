import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { UPDATE_USER_PASSWORD } from '../utils/mutations';
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

export default function UpdatePassword() {
    const { data } = useQuery(QUERY_ME);
    const [userFormData, setUserFormData] = useState({
        password: "",
    });
    const [updatePassword] = useMutation(UPDATE_USER_PASSWORD);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userFormData.password) {
                await updatePassword({
                    variables: { password: userFormData.password },
                });
            }
            alert("Password has been updated!");
        } catch (err) {
            console.error(err);
        }
    };

    const { password } = data.me;

    

    const theme = createTheme();

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
                        Change Password
                    </Typography>
                    <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
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
                            Change Password
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
