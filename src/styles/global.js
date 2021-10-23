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
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background: #EFEFEF;
    height: 100vh;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }

`;
