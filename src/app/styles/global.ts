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
  }

  body, html {
    height: 100%;
  }

  body {
    font-size: 1rem;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.main};
    overflow-x: hidden;

    /* Works on Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary.light} ${({ theme }) => theme.colors.mainBackground};
    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.mainBackground};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary.light};
      border-radius: 20px;
      border: 3px solid ${({ theme }) => theme.colors.mainBackground};
    }
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
