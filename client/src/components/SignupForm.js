import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      })

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const theme = createTheme();


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <TextField
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleInputChange}
            value={userFormData.username}
            required
        />
        <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            value={userFormData.email}
            required
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            value={userFormData.password}
            required
            />


          {/* <Box component="form" type='submit' noValidate sx={{ mt: 1 }}> */}
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger' {...error}>
          Something went wrong with your signup!
        </Alert>



        <Button
disabled={!(userFormData.username && userFormData.email && userFormData.password)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>

    
        {/* <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button> */}
      </Form>
      </Box>
      {/* </Box> */}
      </Container>
      </ThemeProvider>
  );
};

export default SignupForm;


