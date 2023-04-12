import React from 'react';
import { styled } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './Assets/logo.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from 'react-bootstrap';

// const FootContainer = styled(Grid)({
//   display: 'flex',
//   flexDirection: 'column',
//   minHeight: '100vh',
// });

// const Foot = styled(Grid)({
//   flexGrow: '1',
// });

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  color: theme.palette.common.white
}));

const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: '67%',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: 'Trebuchet MS',
  display: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  margin: theme.spacing(1, 1.5),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LogoImage = styled('img')(({ theme }) => ({
  padding: '5px',
  borderRadius: '50px',
  width: 95,
  marginRight: theme.spacing(1),
}));

export default function Footer() {
  return (
    <FooterRoot>
      {/* <FootContainer>
        <Foot> */}
          <Grid container>
            <Grid item xs={12} sm={6}>
              <LogoContainer>
                <LogoImage
                  img src={logo}
                  alt="HomeBros Logo"
                />
                <Typography variant="body1" color="textSecondary">
                  <FooterText>&copy; HomeBros Real Estate 2023</FooterText>

                </Typography>
              </LogoContainer>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="textSecondary" align="right">
                <FooterLink href="#">
                  About Us
                </FooterLink>
                <FooterLink href="#">
                  Contact Us
                </FooterLink>
                <FooterLink href="#">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#">
                  Terms &amp; Conditions
                </FooterLink>
              </Typography>
            </Grid>
          </Grid>
        {/* </Foot>
      </FootContainer> */}
    </FooterRoot>
  );
}