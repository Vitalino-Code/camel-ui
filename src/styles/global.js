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
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`
