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

  body {
    font-size: 1rem;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.main};
    height: 100vh;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.text[800]}
  }
`;
