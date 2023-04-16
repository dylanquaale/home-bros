import { createTheme } from '@mui/material/styles'; // import { createTheme } from @mui/material/styles
import HomeThemeImage from '../Assets/House.png'; // import HomeThemeImage from '../Assets/House.png'

// CreateTheme component that returns the theme for the application and sets the background image
const theme = createTheme({
  palette: {
    background: {
       default: '', // Set the background color to gray
      // default: '#fff',
      backgroundImage:`url(${ HomeThemeImage })`, // Set the image path here
      backgroundSize: 'cover', // Stretch the image to cover the entire background
      backgroundPosition: 'center', // Center the image horizontally and vertically
    },
  },
});

export default theme;
