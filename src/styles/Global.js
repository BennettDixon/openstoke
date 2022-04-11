import { createGlobalStyle } from 'styled-components'
import { fontSizes } from './Type'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text10};
    font-family: ${props => props.theme.fontFamily};
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${props => props.theme.brand};
    transition: opacity 300ms;
    :hover {
      opacity: 0.5;
    }
  }

  p {
    font-size: ${fontSizes.body};
    line-height: calc(${fontSizes.body} + ${fontSizes.lineHeight});
    margin: 0.5rem 0px;
  }

  h1 {
    font-size: ${fontSizes.h1}
  }

  h2 {
    font-size: ${fontSizes.h2}
  }

  h2 {
    font-size: ${fontSizes.h3}
  }

  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    background: ${props => props.theme.highlightBackground};
    color: ${props => props.theme.text10};
  }
`

export { GlobalStyle }
export default GlobalStyle
