// components/GlobalStyles.js
import * as React from "react";
import { GlobalStyles as MuiGlobalStyles } from "@mui/system";
import HomeThemeImage from "../Assets/House.png"; // Add this import

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        backgroundImage: `url(${HomeThemeImage})`, // Update this line
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    }}
  />
);

export default GlobalStyles;
