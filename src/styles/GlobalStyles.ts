import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  *, input, button, h2, span, p {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Marcellus SC', sans-serif;
  }
`
export default GlobalStyles;
