import React from 'react';
import { styled } from '@mui/material/styles';
import logo from '../Assets/logo.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  color: theme.palette.common.white
}));

const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(2, 0),
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
  padding: '35px',
  borderRadius: '150px',
  width: 95,
  marginRight: theme.spacing(1),
}));

export default function Footer() {
  return (
    <FooterRoot>
      <Container>
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
      </Container>
    </FooterRoot>
  );
}
