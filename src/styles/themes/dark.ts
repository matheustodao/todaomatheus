import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
  colors: {
    primary: {
      dark: 'none',
      main: '#25283D',
      light: '#363A59',
    },

    secondary: {
      dark: 'rgba(255, 64, 0, 0.86)',
      main: '#FF4000',
      light: 'none',
    },

    thirtiary: {
      dark: 'rgba(116, 53, 156, 0.7)',
      main: '#C04CFD',
      light: 'rgba(116, 53, 156, 0.65)',
    },

    text: {
      main: '#FFFFFF',
      800: 'rgba(255, 255, 255, 0.8)',
      700: 'rgba(255, 255, 255, 0.73)',
      600: 'rgba(255, 255, 255, 0.65)',
      100: 'rgba(255, 255, 255, 0.1)',
    },
  },

  fonts: {
    inter: 'Inter, sans-serif',
    outfit: 'Outfit, sans-serif',
    poppins: 'Poppins, sans-serif',
  },
};
