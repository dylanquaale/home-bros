import * as React from "react"; // import React
import { GlobalStyles as MuiGlobalStyles } from "@mui/system"; // import { GlobalStyles as MuiGlobalStyles } from @mui/system
import HomeThemeImage from "../Assets/House.png"; // import HomeThemeImage

// GlobalStyles component that returns the global styles for the application
const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        backgroundImage: `url(${HomeThemeImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    }}
  />
);

export default GlobalStyles;
