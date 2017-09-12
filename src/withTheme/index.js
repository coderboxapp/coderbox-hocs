import React from 'react'
import { ThemeProvider } from 'styled-components'
import { setDisplayName, wrapDisplayName } from 'recompose'

export default (theme) => BaseComponent => {
  class WithTheme extends React.Component {
    render () {
      let props = this.props
      return <ThemeProvider theme={theme}><BaseComponent {...props} /></ThemeProvider>
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withTheme'))(WithTheme)
}
