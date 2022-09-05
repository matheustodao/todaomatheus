import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;

    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.inter};
  }

  html {
    max-width: 1366px;
    margin: 0 auto;
    height: 100vh;
  }

  #__next, body {
    height: 100%;
  }

  body {
    font-size: 1rem;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.main};
    overflow-x: hidden;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 700;
    cursor: pointer;
    border: none;
  }

  a {
    color: ${({ theme }) => theme.colors.text[800]}
  }
`;
