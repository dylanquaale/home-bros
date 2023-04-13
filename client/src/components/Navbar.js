import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Auth from "../utils/auth";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import HomeBros from "./Assets/HomeBros.jpg";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileClick = () => {
    navigate("/saved");
    handleMenuClose();
  };
  const handleSaved = () => {
    navigate("/login");
  };

  const HomeBrosImage = styled("img")(({ theme }) => ({
    padding: "5px",
    borderRadius: "50px",
    width: 95,
    marginRight: theme.spacing(1),
  }));

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {Auth.loggedIn() ? (
        <div>
          <MenuItem onClick={handleProfileClick}>My saved Properties</MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleSaved}>My saved Properties</MenuItem>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileClick}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <Button variant="contained">Home</Button>
          </a>
          <HomeBrosImage
            variant="h6"
            noWrap
            component="div"
            marginLeft={"50%"}
            sx={{
              display: {
                s: "none",
                md: "block",
                marginLeft: "40%",
                width: "100px",
              },
            }}
            img
            src={HomeBros}
            alt="HomeBros Logo"
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            marginLeft={'38%'}
            // fontFamily={ 'Trebuchet MS'}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            HomeBros
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          <div>
            {Auth.loggedIn() ? (
              <div>
                <Button onClick={() => Auth.logout()} variant="contained">
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                {/* <a href="/signup"> */}
                <Link to="/signup">
                  <Button component="" variant="contained">
                    Signup
                  </Button>
                </Link>
                {/* </a> */}
                <a href="/login">
                  <Button variant="contained">Login</Button>
                </a>
              </div>
            )}
          </div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
