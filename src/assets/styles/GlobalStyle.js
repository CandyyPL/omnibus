import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;

    background-color: #eee;

    margin: 0;
    padding: 0;

    overflow-x: hidden;

    .active {
      overflow-y: hidden;
    }
  }
`

export default GlobalStyle
