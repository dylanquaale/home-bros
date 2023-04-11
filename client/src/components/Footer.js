import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const FooterRoot = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6, 0),
  }));
  
  const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.common.white,
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
    width: 35,
    marginRight: theme.spacing(1),
  }));
  
  export default function Footer() {
    return (
      <FooterRoot>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <LogoContainer>
              <LogoImage
                src="/homebros-logo.png"
                alt="HomeBros Logo"
              />
              <Typography variant="body1" color="textSecondary">
                &copy; HomeBros Real Estate 2023
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