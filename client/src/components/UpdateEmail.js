import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { UPDATE_USER_EMAIL } from '../utils/mutations';
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

// update email component using the useQuery hook 
export default function UpdateEmail() {
    const { data } = useQuery(QUERY_ME);
    const [userFormData, setUserFormData] = useState({
        email: "",
    });
    
    // use mutation from UPDATE_USER_EMAIL 
    const [UpdateEmail] = useMutation(UPDATE_USER_EMAIL);
// handle change export the name and value 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
// handle the form submit when user submits form 
    // if update email is true return updated otherwise return err 
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userFormData.email) {
                await UpdateEmail({
                    variables: { email: userFormData.email },
                });
            }
            alert("Email has been Updated!");
        } catch (err) {
            console.error(err);
        }
    };

    const theme = createTheme();

    const { email } = data.me;

    

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
                        Change Email
                    </Typography>
                    <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
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
                            Change Email
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
