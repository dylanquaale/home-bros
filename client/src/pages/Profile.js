import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_USER_EMAIL, UPDATE_USER_PASSWORD, UPDATE_USER_USERNAME } from '../utils/mutations';
import { useQuery } from '@apollo/client';

const Profile = () => {
  const { data } = useQuery(QUERY_ME);
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [updateUsername] = useMutation(UPDATE_USER_USERNAME);
  const [updateEmail] = useMutation(UPDATE_USER_EMAIL);
  const [updatePassword] = useMutation(UPDATE_USER_PASSWORD);

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
    if (userFormData.email) {
      await updateEmail({
        variables: { email: userFormData.email },
      });
    }
    if (userFormData.password) {
      await updatePassword({
        variables: { password: userFormData.password },
      });
    }
    alert("User information updated!");
  } catch (err) {
    console.error(err);
  }
};

const theme = createTheme();

  const { username, email } = data.me;

  console.log(`username: ${username}, email: ${email}`);

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container>
          <Typography component="h1" variant="h5">
            Current Username:
            <br /> {username}
          </Typography>
          </Container>
          <br />

          <Typography component="h1" variant="h5" mb="120px">
            Current Email:
            <br /> {email}
          </Typography>
        
          <form onSubmit={handleFormSubmit}>
            <Typography component="h1" variant="h5">
              Change Username
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              id="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />

            <Typography component="h1" variant="h5">
              Change Email
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              name="email"
              id="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />

            <Typography component="h1" variant="h5">
              Change Password
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 20, backgroundColor:'purple'}}

            >
              Save Changes
            </Button>
          


          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;