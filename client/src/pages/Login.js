// Import the modules and functions that are necessary for use.
import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "../utils/auth";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//  component loginForm that renders the login form, userFormData represents the users credentials, and Alert if the credentials are false.
const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
// executre the mutation from LOGIN_USER
  const [loginUser, { error }] = useMutation(LOGIN_USER);
// event handler destructs name and value updates by using spread from previous state 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // checks if form is valid or not 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
// attempts to log the user in by the credentials used
    // good goo gather the data 
    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
// if not successful extract the token
      
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
// state is reset by using empty strings 
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  
  // creates the theme 
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" justify="center">
            Login
          </Typography>
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
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
              {...error}
            >
              Something went wrong with your login!
            </Alert>

            <Button
              disabled={
                !(
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Form>
        </Box>
      </Container>
    </ThemeProvider>

  );
};

export default LoginForm;
