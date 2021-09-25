const { extendTheme } = require("native-base");

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      default: '#5373E5',
      light: '#DAE2FF',
      dark: '#283D87',
      gradient: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
      white: 'white',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

export default theme;
