import { createTheme } from '@mui/material/styles';
import HomeThemeImage from './Assets/HomeTheme.png';

const theme = createTheme({
  palette: {
    background: {
       default: 'gray', // Set the background color to gray
      // default: '#fff',
      backgroundImage:`url(${ HomeThemeImage })`, // Set the image path here
      backgroundSize: 'cover', // Stretch the image to cover the entire background
      backgroundPosition: 'center', // Center the image horizontally and vertically
    },
  },
});

export default theme;
