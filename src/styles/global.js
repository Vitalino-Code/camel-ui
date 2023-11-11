import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BODY_BG};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    scrollbar-gutter: stable;
  }

  ul {
    list-style: none;
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a, button {
    border: none;
    background: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  a:hover, button:hover {
    filter: brightness(0.9);
  }
`
