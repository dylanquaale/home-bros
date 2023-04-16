import React from 'react'; // import React
import { styled } from '@mui/material/styles'; // import { styled } from @mui/material/styles
import logo from '../Assets/logo.jpg'; // import logo
import Grid from '@mui/material/Grid'; // import Grid from @mui/material/Grid
import Typography from '@mui/material/Typography'; // import Typography from @mui/material/Typography
import Link from '@mui/material/Link'; // import Link from @mui/material/Link

// FooterText styles the text in the footer
const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  color: theme.palette.common.white
}));

// FooterRoot styles the footer container
const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: '67%',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(6, 0),
}));

// FooterLink styles the links in the footer
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

// LogoContainer styles the container that holds the logo and the text in the footer
const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// LogoImage styles the logo in the footer
const LogoImage = styled('img')(({ theme }) => ({
  padding: '5px',
  borderRadius: '50px',
  width: 95,
  marginRight: theme.spacing(1),
}));

// Footer component that returns the footer for the application
export default function Footer() {
  return (
    <FooterRoot>
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
    </FooterRoot>
  );
}