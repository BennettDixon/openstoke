import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { containers } from 'ui-kit'
import { GlobalStyle, Theme } from 'styles'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme.light}>
        <GlobalStyle />
        <containers.AppContainer>
          <Component {...pageProps} />
        </containers.AppContainer>
      </ThemeProvider>
    )
  }
}
