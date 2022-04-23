import 'styled-components';

type TOptionsMainColorMain = {
  dark: string,
  main: string,
  light: string,
}

interface IPalette {
  mainBackground: string,
  primary: TOptionsMainColorMain,

  secondary: TOptionsMainColorMain,

  thirtiary: TOptionsMainColorMain,

  text: {
    main: string,
    800: string,
    700: string,
    600: string,
    500: string,
    100: string,
  },
}

interface IFonts {
  inter: string,
  outfit: string,
  poppins: string,
}

interface ISpacing {
  heightHeader: string,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IPalette,
    fonts: IFonts,
    spacing: ISpacing,
  }
}
