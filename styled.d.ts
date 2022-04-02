import 'styled-components';

type TOptionsMainColorMain = {
  dark: string,
  main: string,
  light: string,
}

interface IPalette {
  primary: TOptionsMainColorMain,

  secondary: TOptionsMainColorMain,

  thirtiary: TOptionsMainColorMain,

  text: {
    main: string,
    800: string,
    700: string,
    600: string,
    100: string,
  },
}

interface TFonts {
  inter: string,
  outfit: string,
  poppins: string,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IPalette,
    fonts: TFonts
  }
}
