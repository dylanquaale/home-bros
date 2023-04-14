
import * as React from "react";
import { GlobalStyles as MuiGlobalStyles } from "@mui/system";
import HomeThemeImage from "../Assets/House.png"; 

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
