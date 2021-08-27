import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #root {
      min-height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: 1.6rem;
      color: ${theme.colors.black};
      background: ${theme.colors.white};
    }

    ul {
      list-style: none;
    }
  `}
`;

export default GlobalStyles;
