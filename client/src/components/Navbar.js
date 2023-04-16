import * as React from "react"; // import React
import AppBar from "@mui/material/AppBar"; // import AppBar
import Box from "@mui/material/Box"; // import Box
import Toolbar from "@mui/material/Toolbar"; // import Toolbar
import IconButton from "@mui/material/IconButton"; // import IconButton
import MenuItem from "@mui/material/MenuItem"; // import MenuItem
import Menu from "@mui/material/Menu"; // import Menu
import AccountCircle from "@mui/icons-material/AccountCircle"; // import AccountCircle
import MoreIcon from "@mui/icons-material/MoreVert";  // import MoreIcon
import Auth from "../utils/auth"; // import Auth
import { Button } from "@mui/material"; // import { Button }
import { useNavigate, Link } from "react-router-dom"; // import { useNavigate, Link }
import { styled } from "@mui/material/styles"; // import { styled }
import HomeBros from "../Assets/HomeBros.jpg"; // import HomeBros

// PrimarySearchAppBar styles the navbar container and the navbar elements
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  // isMenuOpen and isMobileMenuOpen are used to determine if the menu is open or not and to close the menu when the user clicks away
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // handleProfileMenuOpen is used to open the menu when the user clicks on the menu icon
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // handleMobileMenuClose is used to close the menu when the user clicks away from the menu icon on mobile
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // handleMenuClose is used to close the menu when the user clicks away
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // handleMobileMenuOpen is used to open the menu when the user clicks on the menu icon on mobile
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // handleLoginClick is used to navigate to the login page when the user clicks on the login button
  const handleProfileClick = () => {
    navigate("/profile");
    handleMenuClose();
  };
  // handleLoginClick is used to navigate to the login page when the user clicks on the login button
  const handleNotLoggedIn = () => {
    navigate("/login");
  };
  // handleLoginClick is used to navigate to the login page when the user clicks on the login button
  const handleSavedClick = () => {
    navigate("/saved");
    handleMenuClose();
  };

  // HomeBrosImage styles the HomeBros logo in the navbar
  const HomeBrosImage = styled("img")(({ theme }) => ({
    padding: "5px",
    borderRadius: "50px",
    width: 95,
    marginRight: theme.spacing(1),
  }));

  // menuId and mobileMenuId are used to identify the menu and mobile menu
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
      {Auth.loggedIn() ? ( // if the user is logged in, show the profile and saved properties menu items
        <div>
          <MenuItem component={Link} to="/profile">Profile</MenuItem>
          <MenuItem component={Link} to="/saved">My Saved Properties</MenuItem>
        </div>
      ) : (
        <div> 
          {/* if the user is not logged in, show the profile and saved properties menu items that will navigate to the login page when clicked */}
          <MenuItem onClick={handleNotLoggedIn}>Profile</MenuItem>
          <MenuItem onClick={handleNotLoggedIn}>My Saved Properties</MenuItem>
        </div>
      )}
    </Menu>
  );

  // mobileMenuId is used to identify the mobile menu and renderMobileMenu is used to render the mobile menu
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
      {/* if the user is logged in, show the profile and saved properties menu items */}
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
      <MenuItem onClick={handleSavedClick}>
        <IconButton
          size="large"
          aria-label="user's saved properties"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        My Saved Properties
      </MenuItem>
    </Menu>
  );

  // PrimarySearchAppBar returns the navbar container and the navbar elements and renders the menu and mobile menu when the user clicks on the menu icon
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static"  >
        <Toolbar sx={{ flexWrap:'wrap' }} >
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
          <Box sx={{ flexGrow: 1 }}  />
          {/* if the user is logged in, show the logout button, if the user is not logged in, show the signup and login buttons */}
          <div>
            {Auth.loggedIn() ? (
              <div>
                <Button onClick={() => Auth.logout()} variant="contained">
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                {/* if the user is not logged in, show the signup and login buttons that will navigate to the signup and login pages when clicked */}
                <Link to="/signup">
                  <Button component="" variant="contained">
                    Signup
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="contained">Login</Button>
                  </Link>
              </div>
            )}
          </div>
          {/* if the user is logged in, show the profile and saved properties menu items */}
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
            {/* if the user is logged in, show the profile and saved properties menu items */}
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
